export interface Modulation {
  modOrder: number;
  codeRate: number;
}

export type FlexSymbolsType = 'guard' | 'dl' | 'ul';

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
  range: 'fr1' | 'fr2';
  numerology: number;
  duplex: 'TDD' | 'FDD' | 'SDL' | 'SUL';
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
