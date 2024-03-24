import type { Modulation, ModulationOutOfSpec } from '~/@types/layer-wifi';

interface McsTable {
  standard: Modulation[];
  outOfSpec?: ModulationOutOfSpec[];
}

export namespace mcstables {
  // only bw = 20, mimo = 1
  export const ht: McsTable = {
    standard: [
      { modOrder: 1, codeRate: 1 / 2 },
      { modOrder: 2, codeRate: 1 / 2 },
      { modOrder: 2, codeRate: 3 / 4 },
      { modOrder: 4, codeRate: 1 / 2 },
      { modOrder: 4, codeRate: 3 / 4 },
      { modOrder: 6, codeRate: 2 / 3 },
      { modOrder: 6, codeRate: 3 / 4 },
      { modOrder: 6, codeRate: 5 / 6 },
    ],
    outOfSpec: [
      { label: 'VHT-8', modOrder: 8, codeRate: 3 / 4 },
      { label: 'VHT-9', modOrder: 8, codeRate: 5 / 6 },
      { label: 'VHT-10', modOrder: 10, codeRate: 3 / 4 },
      { label: 'VHT-11', modOrder: 10, codeRate: 5 / 6 },
    ],
  };

  export const vht: McsTable = {
    standard: [
      { modOrder: 1, codeRate: 1 / 2 },
      { modOrder: 2, codeRate: 1 / 2 },
      { modOrder: 2, codeRate: 3 / 4 },
      { modOrder: 4, codeRate: 1 / 2 },
      { modOrder: 4, codeRate: 3 / 4 },
      { modOrder: 6, codeRate: 2 / 3 },
      { modOrder: 6, codeRate: 3 / 4 },
      { modOrder: 6, codeRate: 5 / 6 },
      { modOrder: 8, codeRate: 3 / 4 },
      { modOrder: 8, codeRate: 5 / 6 },
    ],
    outOfSpec: [
      { label: '10', modOrder: 10, codeRate: 3 / 4 },
      { label: '11', modOrder: 10, codeRate: 5 / 6 },
    ],
  };

  export const he: McsTable = {
    standard: [
      { modOrder: 1, codeRate: 1 / 2 },
      { modOrder: 2, codeRate: 1 / 2 },
      { modOrder: 2, codeRate: 3 / 4 },
      { modOrder: 4, codeRate: 1 / 2 },
      { modOrder: 4, codeRate: 3 / 4 },
      { modOrder: 6, codeRate: 2 / 3 },
      { modOrder: 6, codeRate: 3 / 4 },
      { modOrder: 6, codeRate: 5 / 6 },
      { modOrder: 8, codeRate: 3 / 4 },
      { modOrder: 8, codeRate: 5 / 6 },
      { modOrder: 10, codeRate: 3 / 4 },
      { modOrder: 10, codeRate: 5 / 6 },
    ],
    outOfSpec: [
      { label: '12', modOrder: 12, codeRate: 3 / 4 },
      { label: '13', modOrder: 12, codeRate: 5 / 6 },
    ],
  };

  export const eht: McsTable = {
    standard: [
      { modOrder: 1, codeRate: 1 / 2 },
      { modOrder: 2, codeRate: 1 / 2 },
      { modOrder: 2, codeRate: 3 / 4 },
      { modOrder: 4, codeRate: 1 / 2 },
      { modOrder: 4, codeRate: 3 / 4 },
      { modOrder: 6, codeRate: 2 / 3 },
      { modOrder: 6, codeRate: 3 / 4 },
      { modOrder: 6, codeRate: 5 / 6 },
      { modOrder: 8, codeRate: 3 / 4 },
      { modOrder: 8, codeRate: 5 / 6 },
      { modOrder: 10, codeRate: 3 / 4 },
      { modOrder: 10, codeRate: 5 / 6 },
      { modOrder: 12, codeRate: 3 / 4 },
      { modOrder: 12, codeRate: 5 / 6 },
    ],
  };

  export const vhtInvalidMCS = (bw: number, mimo: number, mcs: number) => {
    // Only mcs 6 and mcs 9 can be invalid
    if (mcs == 6) {
      return bw == 80 && (mimo == 3 || mimo == 7);
    } else if (mcs == 9) {
      return bw == 20 || (bw == 80 && mimo == 6) || (bw == 160 && mimo == 3);
    }

    return false;
  };
}
