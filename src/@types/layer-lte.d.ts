export type DuplexType = 'TDD' | 'FDD' | 'SDL';
export type McsTablesLTE =
  | 'qam64pdsch'
  | 'qam64pusch'
  | 'qam256pdsch'
  | 'qam256pusch'
  | 'qam1024pdsch'
  | 'bit6pdsch';

export interface Modulation {
  modOrder: number;
  codeRate: number;
}

export interface LayerLte {
  duplex: DuplexType;
  resourceBlocksDl: number;
  resourceBlocksUl: number;
  mimoDl: number;
  tbsIndexDl: TbsIndex;
  tbsIndexUl: TbsIndex;
  dlPercentage: number;
  ulPercentage: number;
}

export interface Throughput {
  dl: number;
  ul: number;
}
