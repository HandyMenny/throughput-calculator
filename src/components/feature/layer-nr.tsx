import { component$, useComputed$, useSignal } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import {
  calculateOne,
  dftPrb,
  getFlexibleSymbols,
  getOfdmSymbolDuration,
  getPercentageFromPatterns,
} from '~/helpers/calculator';
import NumberInput from '../input/number-input';
import type { Modulation, LayerNr } from '~/helpers/layer';
import FreqRange from './freq-range';
import Duplex from './duplex';
import Scs from './scs';
import Bandwidth from './bandwidth';
import ModulationNr from './modulation-nr';

export default component$(() => {
  const selectedRange = useSignal<string>('');
  const selectedDuplex = useSignal<string>('');
  const selectedScs = useSignal<string>('');
  const selectedModDl = useSignal<Modulation>({ modOrder: 0, codeRate: 0 });
  const selectedModUl = useSignal<Modulation>({ modOrder: 0, codeRate: 0 });
  const selectedMimoDl = useSignal<string>('');
  const selectedMimoUl = useSignal<string>('');
  const selectedWaveform = useSignal<string>('');
  const selectedTDDRatioMode = useSignal<string>('');
  const selectedPeriodicity = useSignal<string>('5');
  const selectedPeriodicity2 = useSignal<string>('');
  const selectedFlexSymbols = useSignal<string>('');
  const selectedRbDl = useSignal<number>(100);
  const selectedRbUl = useSignal<number>(100);
  const dlPercentage = useSignal<number>(74);
  const ulPercentage = useSignal<number>(23);
  const dlSlots = useSignal<number>(7);
  const ulSlots = useSignal<number>(2);
  const dlSymbols = useSignal<number>(6);
  const ulSymbols = useSignal<number>(4);
  const dlSlots2 = useSignal<number>(0);
  const ulSlots2 = useSignal<number>(0);
  const dlSymbols2 = useSignal<number>(0);
  const ulSymbols2 = useSignal<number>(0);

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

  const tddRatioModes = [
    { label: 'DL/UL percentage', value: 'percentage' },
    { label: 'Common pattern', value: 'pattern' },
    { label: 'Common pattern1 + pattern2', value: 'pattern12' },
  ];

  const periodicityOptions = [
    { label: '0.5 ms', value: '0.5' },
    { label: '0.625 ms', value: '0.625' },
    { label: '1 ms', value: '1' },
    { label: '1.25 ms', value: '1.25' },
    { label: '2 ms', value: '2' },
    { label: '2.5 ms', value: '2.5' },
    { label: '3 ms', value: '3' },
    { label: '4 ms', value: '4' },
    { label: '5 ms', value: '5' },
    { label: '10 ms', value: '10' },
  ];
  const flexSymbolsOptions = [
    { label: 'Guard Period', value: 'guard' },
    { label: 'Downlink', value: 'dl' },
    { label: 'Uplink', value: 'ul' },
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

    let dlRatio = selectedDuplex.value == 'SUL' ? 0 : 100;
    let ulRatio = selectedDuplex.value == 'SDL' ? 0 : 100;

    if (selectedDuplex.value == 'TDD') {
      if (selectedTDDRatioMode.value.startsWith('pattern')) {
        const flexSymbols = selectedFlexSymbols.value;
        const periodicity1 = parseFloat(selectedPeriodicity.value);
        const dlSlots1 = dlSlots.value;
        const ulSlots1 = ulSlots.value;
        const dlSymbols1 = dlSymbols.value;
        const ulSymbols1 = ulSymbols.value;
        let periodicity2 = null;
        let _dlSlots2 = null;
        let _ulSlots2 = null;
        let _dlSymbols2 = null;
        let _ulSymbols2 = null;

        if (selectedTDDRatioMode.value == 'pattern12') {
          periodicity2 = parseFloat(selectedPeriodicity2.value);
          _dlSlots2 = dlSlots2.value;
          _ulSlots2 = ulSlots2.value;
          _dlSymbols2 = dlSymbols2.value;
          _ulSymbols2 = ulSymbols2.value;
        }

        dlRatio =
          getPercentageFromPatterns(
            periodicity1,
            dlSlots1,
            dlSymbols1,
            periodicity2,
            _dlSlots2,
            _dlSymbols2,
            numerology,
          ) * 100;
        ulRatio =
          getPercentageFromPatterns(
            periodicity1,
            ulSlots1,
            ulSymbols1,
            periodicity2,
            _ulSlots2,
            _ulSymbols2,
            numerology,
          ) * 100;

        if (flexSymbols !== 'guard') {
          const flexSymbolsCount = getFlexibleSymbols(
            dlSymbols1,
            ulSymbols1,
            _dlSymbols2 ?? 0,
            _ulSymbols2 ?? 0,
          );
          console.log('flex count' + flexSymbolsCount);
          const symbolDuration = getOfdmSymbolDuration(numerology);
          const flexDuration = flexSymbolsCount * 1000 * symbolDuration;
          console.log('flexduration ' + flexDuration);
          const totalDuration = periodicity1 + (periodicity2 ?? 0);
          if (flexSymbols == 'dl') {
            console.log('flex dl');
            console.log('prev dl ratio: ' + dlRatio);
            dlRatio += (flexDuration / totalDuration) * 100;
            console.log('new dl ratio: ' + dlRatio);
          } else if (flexSymbols == 'ul') {
            console.log('flex ul');
            ulRatio += (flexDuration / totalDuration) * 100;
          }
        }
      } else {
        dlRatio = dlPercentage.value;
        ulRatio = ulPercentage.value;
      }
    }

    dlRatio = Math.max(0, Math.min(dlRatio, 100));
    ulRatio = Math.max(0, Math.min(ulRatio, 100));

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
        <SelectInput
          label={'TDD DL/UL ratio'}
          labelClass="text-center"
          options={tddRatioModes}
          selectedValue={selectedTDDRatioMode}
          hidden={!showTDD.value}
        />
        <SelectInput
          label={'Periodicity'}
          labelClass="text-center"
          options={periodicityOptions}
          selectedValue={selectedPeriodicity}
          hidden={
            !showTDD.value || !selectedTDDRatioMode.value.startsWith('pattern')
          }
        />
        <NumberInput
          label={'Slots DL'}
          labelClass="text-center"
          selectedValue={dlSlots}
          hidden={
            !showTDD.value || !selectedTDDRatioMode.value.startsWith('pattern')
          }
        />
        <NumberInput
          label={'Slots UL'}
          labelClass="text-center"
          selectedValue={ulSlots}
          hidden={
            !showTDD.value || !selectedTDDRatioMode.value.startsWith('pattern')
          }
        />
        <NumberInput
          label={'Symbols DL'}
          labelClass="text-center"
          selectedValue={dlSymbols}
          hidden={
            !showTDD.value || !selectedTDDRatioMode.value.startsWith('pattern')
          }
        />
        <NumberInput
          label={'Symbols UL'}
          labelClass="text-center"
          selectedValue={ulSymbols}
          hidden={
            !showTDD.value || !selectedTDDRatioMode.value.startsWith('pattern')
          }
        />

        <SelectInput
          label={'Periodicity 2'}
          labelClass="text-center"
          options={periodicityOptions}
          selectedValue={selectedPeriodicity2}
          hidden={!showTDD.value || selectedTDDRatioMode.value !== 'pattern12'}
        />
        <NumberInput
          label={'Slots DL 2'}
          labelClass="text-center"
          selectedValue={dlSlots2}
          hidden={!showTDD.value || selectedTDDRatioMode.value !== 'pattern12'}
        />
        <NumberInput
          label={'Slots UL 2'}
          labelClass="text-center"
          selectedValue={ulSlots2}
          hidden={!showTDD.value || selectedTDDRatioMode.value !== 'pattern12'}
        />
        <NumberInput
          label={'Symbols DL 2'}
          labelClass="text-center"
          selectedValue={dlSymbols2}
          hidden={!showTDD.value || selectedTDDRatioMode.value !== 'pattern12'}
        />
        <NumberInput
          label={'Symbols UL 2'}
          labelClass="text-center"
          selectedValue={ulSymbols2}
          hidden={!showTDD.value || selectedTDDRatioMode.value !== 'pattern12'}
        />
        <SelectInput
          label={'Flex Symbols'}
          labelClass="text-center"
          options={flexSymbolsOptions}
          selectedValue={selectedFlexSymbols}
          hidden={
            !showTDD.value || !selectedTDDRatioMode.value.startsWith('pattern')
          }
        />

        <NumberInput
          label={'Slots DL %'}
          labelClass="text-center"
          selectedValue={dlPercentage}
          hidden={!showTDD.value || selectedTDDRatioMode.value != 'percentage'}
        />
        <NumberInput
          label={'Slots UL %'}
          labelClass="text-center"
          selectedValue={ulPercentage}
          hidden={!showTDD.value || selectedTDDRatioMode.value != 'percentage'}
        />
      </div>
    </div>
  );
});
