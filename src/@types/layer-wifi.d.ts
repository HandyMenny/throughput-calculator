export type WiFiStandard = 'ht' | 'vht' | 'he' | 'eht';
export type VHTBwMHz = 20 | 40 | 80 | 160;
export type HEBwTones = 26 | 52 | 106 | 242 | 484 | 996 | 1992;
export type HEBwMHz = '2.5' | '5' | '10' | '20' | '40' | '80' | '160';

export interface Modulation {
  modOrder: number;
  codeRate: number;
}

export interface ModulationOutOfSpec extends Modulation {
  label: string;
}

export interface LayerWifi {
  standard: WiFiStandard;
  subCarriers: number;
  mimo: number;
  mod: Modulation;
  guardInterval: number;
  overhead: number;
}
