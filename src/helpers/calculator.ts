import { mcstables } from './db/mcstables';
import type {
  FlexSymbols,
  FlexSymbolsType,
  LayerNr,
  Modulation,
  TDDCommonPattern,
  TDDRatioPercent,
} from './layer';

// TS 38.211 4.2
const numerologies = [15, 30, 60, 120, 240, 480, 960];

namespace rb_bw_mapping {
  // TS 38.101-1 5.3
  export const fr1 = {
    15: {
      5: 25,
      10: 52,
      15: 79,
      20: 106,
      25: 133,
      30: 160,
      35: 188,
      40: 216,
      45: 242,
      50: 270,
    },
    30: {
      5: 11,
      10: 24,
      15: 38,
      20: 51,
      25: 65,
      30: 78,
      35: 92,
      40: 106,
      45: 119,
      50: 133,
      60: 162,
      70: 189,
      80: 217,
      90: 245,
      100: 273,
    },
    60: {
      10: 11,
      15: 18,
      20: 24,
      25: 31,
      30: 38,
      35: 44,
      40: 51,
      45: 58,
      50: 65,
      60: 79,
      70: 93,
      80: 107,
      90: 121,
      100: 135,
    },
  };

  // TS 38.101-2 5.3
  export const fr2 = {
    60: {
      50: 66,
      100: 132,
      200: 264,
    },
    120: {
      50: 32,
      100: 66,
      200: 132,
      400: 264,
    },
    480: {
      400: 66,
      800: 124,
      1600: 248,
    },
    960: {
      400: 33,
      800: 62,
      1600: 124,
      2000: 148,
    },
  };
}

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

export function getOverhead(range: 'fr1' | 'fr2', direction: 'dl' | 'ul') {
  const db = {
    fr1: { dl: 0.14, ul: 0.08 },
    fr2: { dl: 0.18, ul: 0.1 },
  };

  return db[range][direction];
}

export function getOfdmSymbolDuration(numerology: number) {
  return 0.001 / (14 * 2 ** numerology);
}

export function getScsSupported(range: 'fr1' | 'fr2'): number[] {
  return Object.getOwnPropertyNames(rb_bw_mapping[range]).map((x) =>
    parseInt(x),
  );
}

export function getPrb(
  bw: number,
  numerology: number,
  range: 'fr1' | 'fr2',
  dft?: boolean,
): number | null {
  const scsMapping = getScsBwMapping(range, numerology);
  if (scsMapping == null) return null;

  const prb = getProperty(scsMapping, bw) as number | undefined;
  if (prb == undefined) return null;

  return dft ? dftPrb(prb) : prb;
}

export function getBwsSupported(
  range: 'fr1' | 'fr2',
  numerology: number,
): number[] {
  const scsMapping = getScsBwMapping(range, numerology);
  if (scsMapping == null) return [];

  return Object.getOwnPropertyNames(scsMapping).map((x) => parseInt(x));
}

function getProperty(object: any, property: any): any {
  return object[property];
}

function getScsOrNull(range: 'fr1' | 'fr2', numerology: number): number | null {
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

function getScsBwMapping(range: 'fr1' | 'fr2', numerology: number) {
  const scs = getScsOrNull(range, numerology);
  if (scs == null) return null;
  let scsMapping = undefined;
  if (range == 'fr1') {
    const normalized = scs as 15 | 30 | 60;
    scsMapping = rb_bw_mapping[range][normalized];
  } else {
    const normalized = scs as 60 | 120 | 480 | 960;
    scsMapping = rb_bw_mapping[range][normalized];
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
  mcsTable: 'qam64' | 'qam256' | 'qam64LowSE' | 'dftQam64' | 'dftQam64LowSE',
): Modulation | null {
  const table = mcstables[mcsTable];

  if (mcsIndex < 0 || mcsIndex >= table.length) {
    return null;
  }

  return table[mcsIndex];
}

export function calculateAll(
  layers: LayerNr[],
  direction: 'dl' | 'ul',
): number {
  return layers.reduce((acc, curr) => acc + calculateOne(curr, direction), 0);
}

export function calculateOne(layer: LayerNr, direction: 'dl' | 'ul'): number {
  const layers = direction == 'dl' ? layer.mimoDl : layer.mimoUl;
  const mod = direction == 'dl' ? layer.modDl : layer.modUl;
  const prb =
    direction == 'dl' ? layer.resourceBlocksDl : layer.resourceBlocksUl;
  const ofdmSymbolDuration = getOfdmSymbolDuration(layer.numerology);
  const overhead = getOverhead(layer.range, direction);
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
