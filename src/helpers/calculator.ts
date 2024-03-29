import { mcstables } from './db/mcstables';
import { numerologies } from './db/numerologies';
import { rb_bw_map } from './db/rb-bw-map';
import type {
  FlexSymbols,
  FlexSymbolsType,
  FreqRangeType,
  LayerNr,
  McsTablesNR,
  Modulation,
  TDDCommonPattern,
  TDDRatioPercent,
  ThroughputUnit,
  ThroughputWithUnit,
  UlTxSwitchPair,
} from '~/@types/layer-nr';

// TS 38.306 4.1.2
export function nrCalculator3gpp(
  layers: number,
  modOrder: number,
  codeRate: number,
  scalingFactor: number,
  ofdmSymbolDuration: number,
  prb: number,
  overhead: number,
) {
  const subframesPerRB = 12;
  const symbols = (prb * subframesPerRB) / ofdmSymbolDuration;
  const ratePerSybmbol = modOrder * codeRate * scalingFactor;
  const overheadScaling = 1 - overhead;

  return layers * ratePerSybmbol * symbols * overheadScaling;
}

export function getOverhead(range: FreqRangeType, direction: 'dl' | 'ul') {
  const db = {
    fr1: { dl: 0.14, ul: 0.08 },
    fr2: { dl: 0.18, ul: 0.1 },
  };

  return db[range][direction];
}

export function getOfdmSymbolDuration(numerology: number) {
  return 0.001 / (14 * 2 ** numerology);
}

export function getScsSupported(range: FreqRangeType): number[] {
  return Object.getOwnPropertyNames(rb_bw_map[range]).map((x) => parseInt(x));
}

export function getPrb(
  bw: number,
  numerology: number,
  range: FreqRangeType,
  dft?: boolean,
): number | null {
  const scsMapping = getScsBwMapping(range, numerology);
  if (scsMapping == null) return null;

  const prb = getProperty(scsMapping, bw) as number | undefined;
  if (prb == undefined) return null;

  return dft ? dftPrb(prb) : prb;
}

export function getBwsSupported(
  range: FreqRangeType,
  numerology: number,
): number[] {
  const scsMapping = getScsBwMapping(range, numerology);
  if (scsMapping == null) return [];

  return Object.getOwnPropertyNames(scsMapping).map((x) => parseInt(x));
}

function getProperty(object: any, property: any): any {
  return object[property];
}

function getScsOrNull(range: FreqRangeType, numerology: number): number | null {
  if (range == 'fr1') {
    const scs = numerologies[numerology];

    if (![15, 30, 60].includes(scs)) return null;

    const normalized = scs as 15 | 30 | 60;
    return normalized;
  } else {
    const scs = numerologies[numerology];

    if (![60, 120, 480, 960].includes(scs)) return null;

    const normalized = scs as 60 | 120 | 480 | 960;
    return normalized;
  }
}

function getScsBwMapping(range: FreqRangeType, numerology: number) {
  const scs = getScsOrNull(range, numerology);
  if (scs == null) return null;
  let scsMapping = undefined;
  if (range == 'fr1') {
    const normalized = scs as 15 | 30 | 60;
    scsMapping = rb_bw_map[range][normalized];
  } else {
    const normalized = scs as 60 | 120 | 480 | 960;
    scsMapping = rb_bw_map[range][normalized];
  }
  return scsMapping;
}

function getPercentageFromPattern(
  numerology: number,
  pattern: TDDCommonPattern,
): TDDRatioPercent {
  // normal cyclic prefix
  const symbolsPerSlot = 14;

  const slotsPerSubframe = 2 ** numerology;
  // 1 slot = 1 ms
  const totalSlots = slotsPerSubframe * pattern.periodicity;
  const totalSymbols = totalSlots * symbolsPerSlot;

  const dlSymbols = pattern.dlSlots * symbolsPerSlot + pattern.dlSymbols;
  const ulSymbols = pattern.ulSlots * symbolsPerSlot + pattern.ulSymbols;

  const dlPercent = dlSymbols / totalSymbols;
  const ulPercent = ulSymbols / totalSymbols;

  return { dl: dlPercent, ul: ulPercent, periodicity: pattern.periodicity };
}

export function getPercentageFromPatterns(
  numerology: number,
  flexSymbolsType: FlexSymbolsType,
  pattern1: TDDCommonPattern,
  pattern2?: TDDCommonPattern,
): TDDRatioPercent {
  const percent1 = getPercentageFromPattern(numerology, pattern1);
  let percent2;
  if (pattern2 != undefined) {
    percent2 = getPercentageFromPattern(numerology, pattern2);
  }

  const flexSymbols: FlexSymbols = {
    type: flexSymbolsType,
    numerology: numerology,
    quantity: getFlexibleSymbols(pattern1, pattern2),
  };

  return mergeTDDRatioPercent(flexSymbols, percent1, percent2);
}

function mergeTDDRatioPercent(
  flexSymbols: FlexSymbols,
  a: TDDRatioPercent,
  b: TDDRatioPercent | undefined,
): TDDRatioPercent {
  // initialize values with pattern1
  let totalPeriodicity = a.periodicity;
  let dlCumulative = a.dl;
  let ulCumulative = a.ul;

  // add pattern2
  if (b != undefined) {
    totalPeriodicity += b.periodicity;
    dlCumulative =
      (dlCumulative * a.periodicity + b.dl * b.periodicity) / totalPeriodicity;
    ulCumulative =
      (ulCumulative * a.periodicity + b.ul * b.periodicity) / totalPeriodicity;
  }

  // add flex
  if (flexSymbols.type !== 'guard') {
    const symbolDuration = getOfdmSymbolDuration(flexSymbols.numerology);
    const flexDuration = flexSymbols.quantity * 1000 * symbolDuration;
    const flexPercent = flexDuration / totalPeriodicity;
    if (flexSymbols.type == 'dl') {
      dlCumulative += flexPercent;
    } else {
      ulCumulative += flexPercent;
    }
  }

  return { dl: dlCumulative, ul: ulCumulative, periodicity: totalPeriodicity };
}

export function getFlexibleSymbols(
  pattern1: TDDCommonPattern,
  pattern2: TDDCommonPattern | undefined,
) {
  // normal cyclic prefix
  const symbolsPerSlot = 14;
  let counter = 0;

  // count pattern1 dl/ul transitions
  if (pattern1.dlSlots != 0 && pattern1.ulSlots != 0) {
    counter += symbolsPerSlot;
  }

  // Remove non flexible symbols
  counter -= pattern1.dlSymbols;
  counter -= pattern1.ulSymbols;

  if (pattern2 != undefined) {
    // count pattern2 dl/ul transitions
    if (pattern1.ulSlots == 0 && pattern2.dlSlots != 0) {
      counter += symbolsPerSlot;
    }
    if (pattern2.dlSlots != 0 && pattern2.ulSlots != 0) {
      counter += symbolsPerSlot;
    }

    // Remove pattern2 non flexible symbols
    counter -= pattern2.dlSymbols;
    counter -= pattern2.ulSymbols;
  }

  return counter;
}

export function dftPrb(prb: number) {
  let candidate = prb;

  while (candidate >= 1) {
    let temp = candidate;
    while (temp % 2 == 0) temp /= 2;
    while (temp % 3 == 0) temp /= 3;
    while (temp % 5 == 0) temp /= 5;

    if (temp == 1) break;

    candidate--;
  }

  return candidate;
}

export function getModulation(
  mcsIndex: number,
  mcsTable: McsTablesNR,
): Modulation | null {
  const table = mcstables[mcsTable];

  if (mcsIndex < 0 || mcsIndex >= table.length) {
    return null;
  }

  return table[mcsIndex];
}

export function calculateOne(layer: LayerNr, direction: 'dl' | 'ul'): number {
  const layers = direction == 'dl' ? layer.mimoDl : layer.mimoUl;
  const mod = direction == 'dl' ? layer.modDl : layer.modUl;
  const prb =
    direction == 'dl' ? layer.resourceBlocksDl : layer.resourceBlocksUl;
  const ofdmSymbolDuration = getOfdmSymbolDuration(layer.numerology);
  const overhead = direction == 'dl' ? layer.dlOverhead : layer.ulOverhead;
  const scalingFactor = 1;
  const percentage =
    direction == 'dl' ? layer.dlPercentage : layer.ulPercentage;

  return (
    nrCalculator3gpp(
      layers,
      mod.modOrder,
      mod.codeRate,
      scalingFactor,
      ofdmSymbolDuration,
      prb,
      overhead,
    ) * percentage
  );
}

// This only supports FDD + TDD ul tx switch
export function calculateUlTxSwitchReduction(
  a: UlTxSwitchPair,
  b: UlTxSwitchPair,
): { id: number; txReduction: number } {
  let max;
  let min;
  let txReduction = 0;

  if (a.throughput > b.throughput) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }

  if (max.mimo == 2) {
    // Disable min for max.airtime
    txReduction = min.throughput * max.airtime;
  } else if (min.mimo == 2) {
    // Downgrade min from 2tx -> 1tx
    txReduction = (min.throughput * max.airtime) / 2;
  }
  // if min.mimo = 1tx and max.mimo = 1tx don't do anything

  // txReduction shall be <= min.throughput
  txReduction = Math.min(txReduction, min.throughput);

  return { id: min.id, txReduction: txReduction };
}

export function autoScaleSpeed(
  speed: number,
  unit?: ThroughputUnit,
): ThroughputWithUnit {
  if (unit == undefined) {
    if (speed == 0) {
      unit = undefined;
    } else if (speed < 1_000_000) {
      unit = 'kbps';
    } else if (speed < 1_000_000_000) {
      unit = 'Mbps';
    } else {
      unit = 'Gbps';
    }
  }

  switch (unit) {
    case 'kbps':
      speed = Math.floor(speed / 10) / 100;
      break;
    case 'Mbps':
      speed = Math.floor(speed / 10000) / 100;
      break;
    case 'Gbps':
      speed = Math.floor(speed / 1000000) / 1000;
      break;
  }

  return { value: speed, unit: unit };
}

// Unquantitized TBS Overhead based on TS 38.214 5.1.3.2, 6.1.4.2
export function unquantizedTbsOverhead(
  overhead: number,
  scheduledSymbols: number,
  drmsRePerRB: number,
) {
  const subframesPerRB = 12;
  const maxSymbols = 14;
  const rePerRb = subframesPerRB * scheduledSymbols - drmsRePerRB - overhead;
  const maxRePerRb = subframesPerRB * maxSymbols;

  const percent = rePerRb / maxRePerRb;
  const normalizedPercent = Math.max(0, Math.min(percent, 1));

  return 1 - normalizedPercent;
}

// Inspired by https://www.sharetechnote.com/html/5G/5G_MCS_TBS_CodeRate.html
export function calculateDmrsREs(
  type: 'type1' | 'type2',
  len: number,
  addPos: number,
) {
  const rePerDmrs = type == 'type1' ? 6 : 4;
  const totalRe = rePerDmrs * len * (1 + addPos);

  return totalRe;
}
