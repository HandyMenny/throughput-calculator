export type FreqRangeType = 'fr1' | 'fr2';
export type DuplexType = 'TDD' | 'FDD' | 'SDL' | 'SUL';
export type FlexSymbolsType = 'guard' | 'dl' | 'ul';
export type TDDRatioMode = 'percent' | 'pattern' | 'pattern12';
export type ThroughputUnit = 'kbps' | 'Mbps' | 'Gbps';
export type McsTablesNR =
  | 'qam64'
  | 'qam256'
  | 'qam64LowSE'
  | 'dftQam64'
  | 'dftQam64LowSE';

export interface Modulation {
  modOrder: number;
  codeRate: number;
}

export interface FlexSymbols {
  type: FlexSymbolsType;
  quantity: number;
  numerology: number;
}

export interface TDDCommonPattern {
  periodicity: number;
  dlSlots: number;
  dlSymbols: number;
  ulSlots: number;
  ulSymbols: number;
}

export interface TDDRatioPercent {
  dl: number;
  ul: number;
  periodicity: number;
}

export interface LayerNr {
  range: FreqRangeType;
  // 0 = 15, 1 = 30 etc...
  numerology: number;
  duplex: DuplexType;
  resourceBlocksDl: number;
  resourceBlocksUl: number;
  mimoDl: number;
  mimoUl: number;
  modDl: Modulation;
  modUl: Modulation;
  dlPercentage: number;
  ulPercentage: number;
  ulTransformPrecoding: boolean;
  dlOverhead: number;
  ulOverhead: number;
}

export interface Throughput {
  dl: number;
  ul: number;
}

export interface UlTxSwitchPair {
  id: number;
  on: boolean;
  mimo: number;
  // %
  airtime: number;
  // bps
  throughput: number;
}

export interface ThroughputWithUnit {
  value: number;
  unit?: ThroughputUnit;
}

export interface Overhead {
  dl: number;
  ul: number;
}
