export interface Modulation {
  modOrder: number;
  codeRate: number;
}

export interface FlexSymbols {
  quantity: number;
  type: 'guard' | 'dl' | 'ul';
}

export interface TDDCommonPattern {
  periodicity: number;
  dlSlots: number;
  dlSymbols: number;
  ulSlots: number;
  ulSymbols: number;
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
