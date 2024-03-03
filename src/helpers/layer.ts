export interface Modulation {
  modOrder: number;
  codeRate: number;
}

export interface FlexSymbols {
  quantity: number;
  type: 'guard' | 'dl' | 'ul';
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
