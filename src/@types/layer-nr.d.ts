export type FreqRangeType = 'fr1' | 'fr2';
export type DuplexType = 'TDD' | 'FDD' | 'SDL' | 'SUL';
export type FlexSymbolsType = 'guard' | 'dl' | 'ul';
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
}