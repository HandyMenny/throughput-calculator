import type { SpecialSubframeConfig, TDDConfig } from '~/@types/layer-lte';

export namespace tddconfigs {
  // TS 36.211  Table 4.2-2
  export const subframeConfigs: TDDConfig[] = [
    { dlSubframes: 2, ulSubframes: 6, specialSubframes: 2 },
    { dlSubframes: 4, ulSubframes: 4, specialSubframes: 2 },
    { dlSubframes: 6, ulSubframes: 2, specialSubframes: 2 },
    { dlSubframes: 6, ulSubframes: 3, specialSubframes: 1 },
    { dlSubframes: 7, ulSubframes: 2, specialSubframes: 1 },
    { dlSubframes: 8, ulSubframes: 1, specialSubframes: 1 },
    { dlSubframes: 3, ulSubframes: 5, specialSubframes: 2 },
  ];

  // TS 36.211  Table 4.2-1
  export const specialSubframeConfigs: SpecialSubframeConfig[] = [
    { specialDlSymbols: 3, specialUlSymbols: 1 },
    { specialDlSymbols: 9, specialUlSymbols: 1 },
    { specialDlSymbols: 10, specialUlSymbols: 1 },
    { specialDlSymbols: 11, specialUlSymbols: 1 },
    { specialDlSymbols: 12, specialUlSymbols: 1 },
    { specialDlSymbols: 3, specialUlSymbols: 2 },
    { specialDlSymbols: 9, specialUlSymbols: 2 },
    { specialDlSymbols: 10, specialUlSymbols: 2 },
    { specialDlSymbols: 11, specialUlSymbols: 2 },
  ];
}
