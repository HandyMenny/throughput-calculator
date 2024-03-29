import type { Modulation } from '~/@types/layer-nr';

export namespace mcstables {
  // TS 38.214 Table 5.1.3.1-1
  // 64qam + CP-OFDM
  export const qam64: Modulation[] = [
    { modOrder: 2, codeRate: 120 / 1024 },
    { modOrder: 2, codeRate: 157 / 1024 },
    { modOrder: 2, codeRate: 193 / 1024 },
    { modOrder: 2, codeRate: 251 / 1024 },
    { modOrder: 2, codeRate: 308 / 1024 },
    { modOrder: 2, codeRate: 379 / 1024 },
    { modOrder: 2, codeRate: 449 / 1024 },
    { modOrder: 2, codeRate: 526 / 1024 },
    { modOrder: 2, codeRate: 602 / 1024 },
    { modOrder: 2, codeRate: 679 / 1024 },
    { modOrder: 4, codeRate: 340 / 1024 },
    { modOrder: 4, codeRate: 378 / 1024 },
    { modOrder: 4, codeRate: 434 / 1024 },
    { modOrder: 4, codeRate: 490 / 1024 },
    { modOrder: 4, codeRate: 553 / 1024 },
    { modOrder: 4, codeRate: 616 / 1024 },
    { modOrder: 4, codeRate: 658 / 1024 },
    { modOrder: 6, codeRate: 438 / 1024 },
    { modOrder: 6, codeRate: 466 / 1024 },
    { modOrder: 6, codeRate: 517 / 1024 },
    { modOrder: 6, codeRate: 567 / 1024 },
    { modOrder: 6, codeRate: 616 / 1024 },
    { modOrder: 6, codeRate: 666 / 1024 },
    { modOrder: 6, codeRate: 719 / 1024 },
    { modOrder: 6, codeRate: 772 / 1024 },
    { modOrder: 6, codeRate: 822 / 1024 },
    { modOrder: 6, codeRate: 873 / 1024 },
    { modOrder: 6, codeRate: 910 / 1024 },
    { modOrder: 6, codeRate: 948 / 1024 },
  ];

  // TS 38.214 Table 6.1.4.1-1 w/o pi/2-bpsk
  // 64qam + DFT-s-OFDM
  export const dftQam64: Modulation[] = [
    { modOrder: 2, codeRate: 240 / 2 / 1024 },
    { modOrder: 2, codeRate: 314 / 2 / 1024 },
    { modOrder: 2, codeRate: 193 / 1024 },
    { modOrder: 2, codeRate: 251 / 1024 },
    { modOrder: 2, codeRate: 308 / 1024 },
    { modOrder: 2, codeRate: 379 / 1024 },
    { modOrder: 2, codeRate: 449 / 1024 },
    { modOrder: 2, codeRate: 526 / 1024 },
    { modOrder: 2, codeRate: 602 / 1024 },
    { modOrder: 2, codeRate: 679 / 1024 },
    { modOrder: 4, codeRate: 340 / 1024 },
    { modOrder: 4, codeRate: 378 / 1024 },
    { modOrder: 4, codeRate: 434 / 1024 },
    { modOrder: 4, codeRate: 490 / 1024 },
    { modOrder: 4, codeRate: 553 / 1024 },
    { modOrder: 4, codeRate: 616 / 1024 },
    { modOrder: 4, codeRate: 658 / 1024 },
    { modOrder: 6, codeRate: 466 / 1024 },
    { modOrder: 6, codeRate: 517 / 1024 },
    { modOrder: 6, codeRate: 567 / 1024 },
    { modOrder: 6, codeRate: 616 / 1024 },
    { modOrder: 6, codeRate: 666 / 1024 },
    { modOrder: 6, codeRate: 719 / 1024 },
    { modOrder: 6, codeRate: 772 / 1024 },
    { modOrder: 6, codeRate: 822 / 1024 },
    { modOrder: 6, codeRate: 873 / 1024 },
    { modOrder: 6, codeRate: 910 / 1024 },
    { modOrder: 6, codeRate: 948 / 1024 },
  ];

  // TS 38.214 Table 5.1.3.1-2
  // 256qam + DFT-s-OFDM/CP-OFDM
  export const qam256: Modulation[] = [
    { modOrder: 2, codeRate: 120 / 1024 },
    { modOrder: 2, codeRate: 193 / 1024 },
    { modOrder: 2, codeRate: 308 / 1024 },
    { modOrder: 2, codeRate: 449 / 1024 },
    { modOrder: 2, codeRate: 602 / 1024 },
    { modOrder: 4, codeRate: 378 / 1024 },
    { modOrder: 4, codeRate: 434 / 1024 },
    { modOrder: 4, codeRate: 490 / 1024 },
    { modOrder: 4, codeRate: 553 / 1024 },
    { modOrder: 4, codeRate: 616 / 1024 },
    { modOrder: 4, codeRate: 658 / 1024 },
    { modOrder: 6, codeRate: 466 / 1024 },
    { modOrder: 6, codeRate: 517 / 1024 },
    { modOrder: 6, codeRate: 567 / 1024 },
    { modOrder: 6, codeRate: 616 / 1024 },
    { modOrder: 6, codeRate: 666 / 1024 },
    { modOrder: 6, codeRate: 719 / 1024 },
    { modOrder: 6, codeRate: 772 / 1024 },
    { modOrder: 6, codeRate: 822 / 1024 },
    { modOrder: 6, codeRate: 873 / 1024 },
    { modOrder: 8, codeRate: 682.5 / 1024 },
    { modOrder: 8, codeRate: 711 / 1024 },
    { modOrder: 8, codeRate: 754 / 1024 },
    { modOrder: 8, codeRate: 797 / 1024 },
    { modOrder: 8, codeRate: 841 / 1024 },
    { modOrder: 8, codeRate: 885 / 1024 },
    { modOrder: 8, codeRate: 916.5 / 1024 },
    { modOrder: 8, codeRate: 948 / 1024 },
  ];

  // TS 38.214 Table 5.1.3.1-4
  // 1024qam + CP-OFDM
  export const qam1024: Modulation[] = [
    { modOrder: 2, codeRate: 120 / 1024 },
    { modOrder: 2, codeRate: 193 / 1024 },
    { modOrder: 2, codeRate: 449 / 1024 },
    { modOrder: 4, codeRate: 378 / 1024 },
    { modOrder: 4, codeRate: 490 / 1024 },
    { modOrder: 4, codeRate: 616 / 1024 },
    { modOrder: 6, codeRate: 466 / 1024 },
    { modOrder: 6, codeRate: 517 / 1024 },
    { modOrder: 6, codeRate: 567 / 1024 },
    { modOrder: 6, codeRate: 616 / 1024 },
    { modOrder: 6, codeRate: 666 / 1024 },
    { modOrder: 6, codeRate: 719 / 1024 },
    { modOrder: 6, codeRate: 772 / 1024 },
    { modOrder: 6, codeRate: 822 / 1024 },
    { modOrder: 6, codeRate: 873 / 1024 },
    { modOrder: 8, codeRate: 682.5 / 1024 },
    { modOrder: 8, codeRate: 711 / 1024 },
    { modOrder: 8, codeRate: 754 / 1024 },
    { modOrder: 8, codeRate: 797 / 1024 },
    { modOrder: 8, codeRate: 841 / 1024 },
    { modOrder: 8, codeRate: 885 / 1024 },
    { modOrder: 8, codeRate: 916.5 / 1024 },
    { modOrder: 8, codeRate: 948 / 1024 },
    { modOrder: 10, codeRate: 805.5 / 1024 },
    { modOrder: 10, codeRate: 853 / 1024 },
    { modOrder: 10, codeRate: 900.5 / 1024 },
    { modOrder: 10, codeRate: 948 / 1024 },
  ];

  // TS 38.214 Table 5.1.3.1-3
  // 64qam low spectral efficiency + CP-OFDM
  export const qam64LowSE: Modulation[] = [
    { modOrder: 2, codeRate: 30 / 1024 },
    { modOrder: 2, codeRate: 40 / 1024 },
    { modOrder: 2, codeRate: 50 / 1024 },
    { modOrder: 2, codeRate: 64 / 1024 },
    { modOrder: 2, codeRate: 78 / 1024 },
    { modOrder: 2, codeRate: 99 / 1024 },
    { modOrder: 2, codeRate: 120 / 1024 },
    { modOrder: 2, codeRate: 157 / 1024 },
    { modOrder: 2, codeRate: 193 / 1024 },
    { modOrder: 2, codeRate: 251 / 1024 },
    { modOrder: 2, codeRate: 308 / 1024 },
    { modOrder: 2, codeRate: 379 / 1024 },
    { modOrder: 2, codeRate: 449 / 1024 },
    { modOrder: 2, codeRate: 526 / 1024 },
    { modOrder: 2, codeRate: 602 / 1024 },
    { modOrder: 4, codeRate: 340 / 1024 },
    { modOrder: 4, codeRate: 378 / 1024 },
    { modOrder: 4, codeRate: 434 / 1024 },
    { modOrder: 4, codeRate: 490 / 1024 },
    { modOrder: 4, codeRate: 553 / 1024 },
    { modOrder: 4, codeRate: 616 / 1024 },
    { modOrder: 6, codeRate: 438 / 1024 },
    { modOrder: 6, codeRate: 466 / 1024 },
    { modOrder: 6, codeRate: 517 / 1024 },
    { modOrder: 6, codeRate: 567 / 1024 },
    { modOrder: 6, codeRate: 616 / 1024 },
    { modOrder: 6, codeRate: 666 / 1024 },
    { modOrder: 6, codeRate: 719 / 1024 },
    { modOrder: 6, codeRate: 772 / 1024 },
  ];

  // TS 38.214 Table 6.1.4.1-2 w/o pi/2-bpsk
  // 64qam low spectral efficiency + DFT-s-OFDM
  export const dftQam64LowSE: Modulation[] = [
    { modOrder: 2, codeRate: 60 / 2 / 1024 },
    { modOrder: 2, codeRate: 80 / 2 / 1024 },
    { modOrder: 2, codeRate: 100 / 2 / 1024 },
    { modOrder: 2, codeRate: 128 / 2 / 1024 },
    { modOrder: 2, codeRate: 156 / 2 / 1024 },
    { modOrder: 2, codeRate: 198 / 2 / 1024 },
    { modOrder: 2, codeRate: 120 / 1024 },
    { modOrder: 2, codeRate: 157 / 1024 },
    { modOrder: 2, codeRate: 193 / 1024 },
    { modOrder: 2, codeRate: 251 / 1024 },
    { modOrder: 2, codeRate: 308 / 1024 },
    { modOrder: 2, codeRate: 379 / 1024 },
    { modOrder: 2, codeRate: 449 / 1024 },
    { modOrder: 2, codeRate: 526 / 1024 },
    { modOrder: 2, codeRate: 602 / 1024 },
    { modOrder: 2, codeRate: 679 / 1024 },
    { modOrder: 4, codeRate: 378 / 1024 },
    { modOrder: 4, codeRate: 434 / 1024 },
    { modOrder: 4, codeRate: 490 / 1024 },
    { modOrder: 4, codeRate: 553 / 1024 },
    { modOrder: 4, codeRate: 616 / 1024 },
    { modOrder: 4, codeRate: 658 / 1024 },
    { modOrder: 4, codeRate: 699 / 1024 },
    { modOrder: 4, codeRate: 772 / 1024 },
    { modOrder: 6, codeRate: 567 / 1024 },
    { modOrder: 6, codeRate: 616 / 1024 },
    { modOrder: 6, codeRate: 666 / 1024 },
    { modOrder: 6, codeRate: 772 / 1024 },
  ];
}
