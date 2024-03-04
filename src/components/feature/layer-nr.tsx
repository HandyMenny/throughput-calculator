import { component$, useComputed$, useSignal } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import {
  calculateOne,
  dftPrb,
  getBwsSupported,
  getFlexibleSymbols,
  getModulation,
  getOfdmSymbolDuration,
  getPercentageFromPatterns,
  getPrb,
} from '~/helpers/calculator';
import NumberInput from '../input/number-input';
import type { Modulation, LayerNr } from '~/helpers/layer';
import { mcstables } from '~/helpers/mcstables';
import FreqRange from './freq-range';
import Duplex from './duplex';

export default component$(() => {
  const selectedRange = useSignal<string>('');
  const selectedDuplex = useSignal<string>('');
  const selectedScs = useSignal<string>('');
  const selectedBwDl = useSignal<string>('');
  const selectedBwUl = useSignal<string>('');
  const selectedModDl = useSignal<string>('');
  const selectedModUl = useSignal<string>('');
  const selectedMcsTableDl = useSignal<string>('');
  const selectedMcsTableUl = useSignal<string>('');
  const selectedMcsIndexDl = useSignal<string>('');
  const selectedMcsIndexUl = useSignal<string>('');
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

  const scsOptions = useComputed$(() => {
    const range = selectedRange.value;
    if (range == 'fr1') {
      return [
        { label: '15 kHz', value: '0' },
        { label: '30 kHz', value: '1' },
        { label: '60 kHz', value: '2' },
      ];
    } else if (range == 'fr2') {
      return [
        { label: '60 kHz', value: '2' },
        { label: '120 kHz', value: '3' },
        { label: '480 kHz', value: '5' },
        { label: '960 kHz', value: '6' },
      ];
    } else {
      return [];
    }
  });

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

  const modulationDlOptions = [
    { label: 'QPSK', value: '2' },
    { label: '16QAM', value: '4' },
    { label: '64QAM', value: '6' },
    { label: '256QAM', value: '8' },
    { label: '1024QAM', value: '10' },
    { label: 'MCS Index', value: '-1' },
    { label: 'Modulation Order + Code Rate', value: '-2' },
  ];

  const modulationUlOptions = useComputed$(() => {
    if (selectedWaveform.value == 'true') {
      return [
        { label: 'π/2 BPSK', value: '1' },
        { label: 'QPSK', value: '2' },
        { label: '16QAM', value: '4' },
        { label: '64QAM', value: '6' },
        { label: '256QAM', value: '8' },
        { label: 'MCS Index', value: '-1' },
      ];
    } else {
      return [
        { label: 'QPSK', value: '2' },
        { label: '16QAM', value: '4' },
        { label: '64QAM', value: '6' },
        { label: '256QAM', value: '8' },
        { label: 'MCS index', value: '-1' },
      ];
    }
  });

  const mcsTablesDL = [
    { label: '64qam (5.1.3.1-1)', value: 'qam64' },
    { label: '256qam (5.1.3.1-2)', value: 'qam256' },
    { label: '64qam low spectral efficiency (5.1.3.1-3)', value: 'qam64LowSE' },
    { label: '1024qam (5.1.3.1-4)', value: 'qam1024' },
  ];

  const mcsTablesUL = useComputed$(() => {
    if (selectedWaveform.value == 'true') {
      return [
        { label: '64qam (6.1.4.1-1)', value: 'dftQam64' },
        { label: '256qam (5.1.3.1-2)', value: 'qam256' },
        {
          label: '64qam low spectral efficiency (6.1.4.1-2)',
          value: 'dftQam64LowSE',
        },
      ];
    } else {
      return [
        { label: '64qam (5.1.3.1-1)', value: 'qam64' },
        { label: '256qam (5.1.3.1-2)', value: 'qam256' },
        {
          label: '64qam low spectral efficiency (5.1.3.1-3)',
          value: 'qam64LowSE',
        },
      ];
    }
  });

  const mcsIndexesDl = useComputed$(() => {
    const table = selectedMcsTableDl.value as
      | ''
      | 'qam64'
      | 'qam256'
      | 'qam64LowSE'
      | 'dftQam64'
      | 'dftQam64LowSE';
    if (table == '') return [];

    const mcsTable = mcstables[table];
    const map = mcsTable.map((_, index) => {
      return { label: index + '', value: index + '' };
    });
    return map;
  });

  const mcsIndexesUl = useComputed$(() => {
    const table = selectedMcsTableUl.value as
      | ''
      | 'qam64'
      | 'qam256'
      | 'qam64LowSE'
      | 'dftQam64'
      | 'dftQam64LowSE';
    if (table == '') return [];

    const mcsTable = mcstables[table];
    const map = mcsTable.map((_, index) => {
      return { label: index + '', value: index + '' };
    });
    return map;
  });

  const waveformOptions = [
    { label: 'CP-OFDM', value: 'false' },
    { label: 'DFT-s-OFDM', value: 'true' },
  ];

  const bandwidthDlOptions = useComputed$(() => {
    console.log('computing');

    if (selectedRange.value == '') return [];

    const range = selectedRange.value as 'fr1' | 'fr2';
    const scs = parseInt(selectedScs.value);

    if (isNaN(scs)) return [];

    const result = getBwsSupported(range, scs);

    const map = result.map((it) => {
      return {
        label: it + ' MHz (' + getPrb(it, scs, range, false) + ' RB) ',
        value: it + '',
      };
    });

    const manual = { label: 'Resource Blocks', value: 'manual' };
    map.push(manual);

    return map;
  });

  const bandwidthUlOptions = useComputed$(() => {
    console.log('computing');

    if (selectedRange.value == '') return [];

    const range = selectedRange.value as 'fr1' | 'fr2';
    const scs = parseInt(selectedScs.value);
    const dft = selectedWaveform.value == 'true';

    if (isNaN(scs)) return [];

    const result = getBwsSupported(range, scs);

    const map = result.map((it) => {
      return {
        label: it + ' MHz (' + getPrb(it, scs, range, dft) + ' RB) ',
        value: it + '',
      };
    });

    const manual = { label: 'Resource Blocks', value: 'manual' };
    map.push(manual);

    return map;
  });

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
    let rbDl = 0;
    let rbUl = 0;
    if (selectedBwDl.value == 'manual') {
      rbDl = selectedRbDl.value;
    } else {
      rbDl = getPrb(parseInt(selectedBwDl.value), numerology, range) ?? 0;
    }
    if (selectedBwUl.value == 'manual') {
      rbUl = selectedRbDl.value;
    } else {
      rbUl = getPrb(parseInt(selectedBwUl.value), numerology, range) ?? 0;
    }
    if (dft) rbUl = dftPrb(rbUl);

    let modDl: Modulation;
    let modUl: Modulation;
    if (selectedModDl.value == '-1') {
      const mcsTable = selectedMcsTableDl.value as any;
      modDl = getModulation(parseInt(selectedMcsIndexDl.value), mcsTable) ?? {
        modOrder: 0,
        codeRate: 0,
      };
    } else {
      modDl = {
        modOrder: parseInt(selectedModDl.value),
        codeRate: 948 / 1024,
      };
    }
    if (selectedModUl.value == '-1') {
      const mcsTable = selectedMcsTableUl.value as any;
      modUl = getModulation(parseInt(selectedMcsIndexUl.value), mcsTable) ?? {
        modOrder: 0,
        codeRate: 0,
      };
    } else {
      modUl = {
        modOrder: parseInt(selectedModUl.value),
        codeRate: 948 / 1024,
      };
    }

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
        <SelectInput
          label={'SCS'}
          labelClass="text-center"
          options={scsOptions.value}
          selectedValue={selectedScs}
        />
        <SelectInput
          label={'Downlink Bandwdith'}
          labelClass="text-center"
          options={bandwidthDlOptions.value}
          selectedValue={selectedBwDl}
          hidden={!showDl.value}
        />
        <NumberInput
          label={'Downlink RBs'}
          labelClass="text-center"
          selectedValue={selectedRbDl}
          hidden={!showDl.value || selectedBwDl.value !== 'manual'}
        />
        <SelectInput
          label={'Uplink Bandwdith'}
          labelClass="text-center"
          options={bandwidthUlOptions.value}
          selectedValue={selectedBwUl}
          hidden={!showUl.value}
        />
        <NumberInput
          label={'Uplink RBs'}
          labelClass="text-center"
          selectedValue={selectedRbUl}
          hidden={!showUl.value || selectedBwUl.value !== 'manual'}
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
        <SelectInput
          label={'Downlink Modulation'}
          labelClass="text-center"
          options={modulationDlOptions}
          selectedValue={selectedModDl}
          hidden={!showDl.value}
        />
        <SelectInput
          label={'Downlink MCS Table'}
          labelClass="text-center"
          options={mcsTablesDL}
          selectedValue={selectedMcsTableDl}
          hidden={!showDl.value || selectedModDl.value !== '-1'}
        />
        <SelectInput
          label={'Downlink MCS Index'}
          labelClass="text-center"
          options={mcsIndexesDl.value}
          selectedValue={selectedMcsIndexDl}
          hidden={!showDl.value || selectedModDl.value !== '-1'}
        />
        <SelectInput
          label={'Uplink Modulation'}
          labelClass="text-center"
          options={modulationUlOptions.value}
          selectedValue={selectedModUl}
          hidden={!showUl.value}
        />
        <SelectInput
          label={'Uplink MCS Table'}
          labelClass="text-center"
          options={mcsTablesUL.value}
          selectedValue={selectedMcsTableUl}
          hidden={!showUl.value || selectedModUl.value !== '-1'}
        />
        <SelectInput
          label={'Uplink MCS Index'}
          labelClass="text-center"
          options={mcsIndexesUl.value}
          selectedValue={selectedMcsIndexUl}
          hidden={!showUl.value || selectedModUl.value !== '-1'}
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
