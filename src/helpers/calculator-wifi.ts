import type {
  HEBwMHz,
  HEBwTones,
  LayerWifi,
  VHTBwMHz,
  WiFiStandard,
} from '~/@types/layer-wifi';
import type { ThroughputUnit, ThroughputWithUnit } from '~/@types/layer-nr';

export function layerWifiTputCalculator(layer: LayerWifi) {
  const { standard, subCarriers, mimo, mod, overhead, guardInterval } = layer;

  const ofdmSymbolDuration = getOfdmSymbolDuration(standard);

  return wifiCalculator(
    mimo,
    mod.modOrder,
    mod.codeRate,
    ofdmSymbolDuration,
    guardInterval,
    subCarriers,
    overhead,
  );
}

function wifiCalculator(
  mimoLayers: number,
  modOrder: number,
  codeRate: number,
  ofdmSymbolDuration: number,
  guardInterval: number,
  subCarriers: number,
  overhead: number,
) {
  const ratePerSymbol = modOrder * codeRate;
  const symbols = subCarriers / (ofdmSymbolDuration + guardInterval);
  const overheadScaling = 1 - overhead;

  return mimoLayers * symbols * ratePerSymbol * overheadScaling;
}

function getOfdmSymbolDuration(standard: WiFiStandard) {
  switch (standard) {
    case 'ht':
    case 'vht':
      return 3.2 * 10 ** -6;
    case 'he':
    case 'eht':
      return 12.8 * 10 ** -6;
  }
}

// bw = MHz for HT/VHT, tones for HE/EHT
export function getSubCarriers(
  bw: number,
  standard: WiFiStandard,
): number | null {
  const htVhtBwMapping = { 20: 52, 40: 108, 80: 234, 160: 468 };
  const heEhtBwMapping = {
    26: 24,
    52: 48,
    106: 102,
    242: 234,
    484: 468,
    996: 980,
    1992: 1960,
  };

  if (standard == 'ht' || standard == 'vht') {
    if (Object.keys(htVhtBwMapping).includes(bw.toString())) {
      return htVhtBwMapping[bw as VHTBwMHz];
    }
  } else {
    if (Object.keys(heEhtBwMapping).includes(bw.toString())) {
      return heEhtBwMapping[bw as HEBwTones];
    }
  }

  return null;
}

export function mhzToTones(mhz: string): number | null {
  const mapping = {
    '2.5': 26,
    '5': 52,
    '10': 106,
    '20': 242,
    '40': 484,
    '80': 996,
    '160': 1992,
  };

  if (Object.keys(mapping).includes(mhz)) {
    return mapping[mhz as HEBwMHz];
  } else {
    return null;
  }
}

export function tonesToMHz(tones: number): number | null {
  const mapping = {
    '26': 2.5,
    '52': 5,
    '106': 10,
    '242': 20,
    '484': 40,
    '996': 80,
    '1992': 160,
  };

  if (Object.keys(mapping).includes(tones.toString())) {
    return mapping[tones as HEBwTones];
  } else {
    return null;
  }
}

export function getBwsSupported(standard: WiFiStandard): number[] {
  switch (standard) {
    case 'ht':
      return [20, 40];
    case 'vht':
      return [20, 40, 80, 160];
    case 'he':
      return [26, 52, 106, 242, 484, 996, 1992];
    case 'eht':
      return [26, 52, 106, 242, 484, 996, 1992];
  }
}

export function autoScaleSpeed(speed: number): ThroughputWithUnit {
  let unit: ThroughputUnit | undefined;

  if (speed == 0) {
    unit = undefined;
  } else if (speed < 1_000_000) {
    unit = 'kbps';
  } else if (speed < 1_000_000_000) {
    unit = 'Mbps';
  } else {
    unit = 'Gbps';
  }

  switch (unit) {
    case 'kbps':
      speed = Math.round(speed / 1000);
      break;
    case 'Mbps':
      speed = Math.round(speed / 100000) / 10;
      break;
    case 'Gbps':
      speed = Math.round(speed / 1000000) / 1000;
      break;
  }

  return { value: speed, unit: unit };
}

// return null for out of spec HT MCS indexes
export function baseMcsToHtMcs(baseMcs: number, mimo: number) {
  if (baseMcs > 7 || baseMcs < 0) return null;

  return baseMcs + (mimo - 1) * 8;
}
