import { component$, useComputed$, useSignal } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import { calculateOne, dftPrb } from '~/helpers/calculator';
import type { Modulation, LayerNr } from '~/helpers/layer';
import FreqRange from './freq-range';
import Duplex from './duplex';
import Scs from './scs';
import Bandwidth from './bandwidth';
import ModulationNr from './modulation-nr';
import TddRatioNr from './tdd-ratio-nr';

export default component$(() => {
  const selectedRange = useSignal<string>('');
  const selectedDuplex = useSignal<string>('');
  const selectedScs = useSignal<string>('');
  const selectedModDl = useSignal<Modulation>({ modOrder: 0, codeRate: 0 });
  const selectedModUl = useSignal<Modulation>({ modOrder: 0, codeRate: 0 });
  const selectedMimoDl = useSignal<string>('');
  const selectedMimoUl = useSignal<string>('');
  const selectedWaveform = useSignal<string>('');
  const selectedRbDl = useSignal<number>(100);
  const selectedRbUl = useSignal<number>(100);
  const tddRatio = useSignal<number[]>([100, 100]);

  const mimoDlOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
  ];

  const mimoUlOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ];

  const waveformOptions = [
    { label: 'CP-OFDM', value: 'false' },
    { label: 'DFT-s-OFDM', value: 'true' },
  ];

  const calculate = useComputed$(() => {
    const numerology = parseInt(selectedScs.value);
    if (selectedRange.value == '') return [0, 0];
    const range = selectedRange.value as 'fr1' | 'fr2';
    const dft = selectedWaveform.value == 'true';
    const rbDl = selectedRbDl.value;
    let rbUl = selectedRbUl.value;
    if (dft) rbUl = dftPrb(rbUl);

    const modDl: Modulation = selectedModDl.value;
    const modUl: Modulation = selectedModUl.value;

    let dlRatio = 1;
    let ulRatio = 1;

    if (selectedDuplex.value == 'TDD') {
      dlRatio = tddRatio.value[0];
      ulRatio = tddRatio.value[1];
    } else if (selectedDuplex.value == 'SUL') {
      dlRatio = 0;
    } else if (selectedDuplex.value == 'SDL') {
      ulRatio = 0;
    }

    const layer: LayerNr = {
      range: range,
      numerology: numerology,
      duplex: selectedDuplex.value as any,
      resourceBlocksDl: rbDl,
      resourceBlocksUl: rbUl,
      mimoDl: parseInt(selectedMimoDl.value),
      mimoUl: parseInt(selectedMimoUl.value),
      modDl: modDl,
      modUl: modUl,
      dlPercentage: dlRatio,
      ulPercentage: ulRatio,
      ulTransformPrecoding: dft,
    };

    const dl = Math.floor(calculateOne(layer, 'dl') / 10000) / 100;
    const ul = Math.floor(calculateOne(layer, 'ul') / 10000) / 100;
    return [dl, ul];
  });

  const showDl = useComputed$(() => selectedDuplex.value !== 'SUL');
  const showUl = useComputed$(() => selectedDuplex.value !== 'SDL');
  const showTDD = useComputed$(() => selectedDuplex.value === 'TDD');
  return (
    <div class="p-4">
      <h1 class="text-center text-xl">
        Speed: {calculate.value[0]} Mbps / {calculate.value[1]} Mbps
      </h1>
      <div class="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <FreqRange selectedValue={selectedRange} />
        <Duplex
          selectedRange={selectedRange.value as 'fr1' | 'fr2'}
          selectedValue={selectedDuplex}
          hidden={selectedRange.value == 'fr2'}
        />
        <Scs
          selectedRange={selectedRange.value as 'fr1' | 'fr2'}
          selectedValue={selectedScs}
        />
        <Bandwidth
          prefix={'Downlink'}
          selectedRange={selectedRange.value as 'fr1' | 'fr2'}
          selectedScs={parseInt(selectedScs.value)}
          selectedValue={selectedRbDl}
          hidden={!showDl.value}
        />
        <Bandwidth
          prefix={'Uplink'}
          selectedRange={selectedRange.value as 'fr1' | 'fr2'}
          selectedScs={parseInt(selectedScs.value)}
          selectedValue={selectedRbUl}
          dft={selectedWaveform.value == 'true'}
          hidden={!showUl.value}
        />
        <SelectInput
          label={'Downlink Mimo Layers'}
          labelClass="text-center"
          options={mimoDlOptions}
          selectedValue={selectedMimoDl}
          hidden={!showDl.value}
        />
        <SelectInput
          label={'Uplink Mimo Layers'}
          labelClass="text-center"
          options={mimoUlOptions}
          selectedValue={selectedMimoUl}
          hidden={!showUl.value}
        />
        <ModulationNr
          prefix={'Downlink'}
          selectedValue={selectedModDl}
          hidden={!showDl.value}
        />
        <ModulationNr
          prefix={'Uplink'}
          selectedValue={selectedModUl}
          ul={true}
          dft={selectedWaveform.value == 'true'}
          hidden={!showUl.value}
        />
        <SelectInput
          label={'Uplink Waveform'}
          labelClass="text-center"
          options={waveformOptions}
          selectedValue={selectedWaveform}
          hidden={!showUl.value}
        />
        <TddRatioNr
          selectedScs={parseInt(selectedScs.value)}
          selectedValue={tddRatio}
          hidden={!showTDD.value}
        />
      </div>
    </div>
  );
});
