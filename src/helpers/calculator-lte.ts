import type {
  LayerLte,
  McsTablesLTE,
  SpecialSubframeConfig,
  TDDConfig,
  TDDRatioPercent,
} from '~/@types/layer-lte';
import { rb_bw_map } from './db/lte-rb-bw-map';
import { mcstables } from './db/lte-mcs-tables';
import { type TbsIndex, lteTbsTable } from './db/lte-tbs-table';

export function getRb(bw: rb_bw_map.lteBWs) {
  return rb_bw_map.map[bw];
}

export function getBwsSupported() {
  return Object.keys(rb_bw_map.map).sort(
    (a, b) => parseFloat(a) - parseFloat(b),
  ) as rb_bw_map.lteBWs[];
}

export function getClosestTbsIndex(
  modulationOrder: number,
  direction: 'dl' | 'ul',
) {
  switch (modulationOrder) {
    case 2:
      return '13';
    case 4:
      return '21';
    case 6:
      return '26';
    case 8:
      return '33';
    case 9:
      return direction == 'dl' ? '33B' : '34';
    case 10:
      return '37';
  }
  return '0';
}

export function getTbs(layers: number, rbs: number, tbsIndex: TbsIndex) {
  return lteTbsTable.getTbs(tbsIndex, rbs * layers);
}

export function getTbsIndexFromMcs(
  index: number,
  mcsTable: McsTablesLTE,
  alt: number,
) {
  try {
    const table = mcstables[mcsTable];

    if (alt > 0) {
      return (table as any).alternative[index][alt - 1] as string;
    }

    return table.standard[index];
  } catch (_) {
    return '0';
  }
}

// TS 38.306 4.1.2
export function lteCalculator3gpp(layer: LayerLte, direction: 'dl' | 'ul') {
  const layers = direction == 'dl' ? layer.mimoDl : 1;
  const tbsIndex = direction == 'dl' ? layer.tbsIndexDl : layer.tbsIndexUl;
  const prb =
    direction == 'dl' ? layer.resourceBlocksDl : layer.resourceBlocksUl;
  const percentage =
    direction == 'dl' ? layer.dlPercentage : layer.ulPercentage;

  if (!tbsIndex) return 0;

  const tbs = getTbs(layers, prb, tbsIndex);

  return tbs * 1000 * percentage;
}

export function getPercentageTddConfig(
  subframesConfig: TDDConfig,
  specialSubframeConfig: SpecialSubframeConfig,
): TDDRatioPercent {
  // normal cyclic prefix
  const symbolsPerSubframe = 14;
  const totalSubframes = 10;
  const totalSymbols = totalSubframes * symbolsPerSubframe;

  const { dlSubframes, ulSubframes, specialSubframes } = subframesConfig;
  const { specialDlSymbols, specialUlSymbols } = specialSubframeConfig;

  const dlSymbols =
    dlSubframes * symbolsPerSubframe + specialDlSymbols * specialSubframes;
  const ulSymbols =
    ulSubframes * symbolsPerSubframe + specialUlSymbols * specialSubframes;

  const dlPercent = dlSymbols / totalSymbols;
  const ulPercent = ulSymbols / totalSymbols;

  return { dl: dlPercent, ul: ulPercent };
}
