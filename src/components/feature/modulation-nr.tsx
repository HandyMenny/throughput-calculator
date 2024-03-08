import {
  type Signal,
  component$,
  useComputed$,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import { getModulation } from '~/helpers/calculator';
import type { McsTablesNR, Modulation } from '~/@types/layer-nr';
import { mcstables } from '~/helpers/db/mcstables';
import NumberInput from '../input/number-input';

interface Props {
  selectedValue?: Signal<Modulation>;
  prefix?: string;
  ul?: boolean;
  dft?: boolean;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { prefix, selectedValue, ul, dft, hidden } = props;

  const selectedMod = useSignal<string>('6');
  const selectedMcsTable = useSignal<McsTablesNR>('qam64');
  const selectedMcsIndex = useSignal<string>('0');
  const selectedModulationOrder = useSignal<string>('6');
  const selectedCodeRate = useSignal<number>(0.92578125);

  const modulationOrderOptions = useComputed$(() => {
    const arr = [
      { label: '2 (QPSK)', value: '2' },
      { label: '4 (16QAM)', value: '4' },
      { label: '6 (64QAM)', value: '6' },
      { label: '8 (256QAM)', value: '8' },
    ];

    if (!ul) {
      const qam1024 = { label: '10 (1024QAM)', value: '10' };
      arr.splice(4, 0, qam1024);
    } else if (dft) {
      const bpsk = { label: '1 (π/2 BPSK)', value: '1' };
      arr.splice(0, 0, bpsk);
    }
    return arr;
  });

  const modulationOptions = useComputed$(() => {
    const arr = [
      { label: 'QPSK', value: '2' },
      { label: '16QAM', value: '4' },
      { label: '64QAM', value: '6' },
      { label: '256QAM', value: '8' },
      { label: 'MCS index', value: '-1' },
      { label: 'Modulation Order + Code rate', value: '-2' },
    ];

    if (!ul) {
      const qam1024 = { label: '1024QAM', value: '10' };
      arr.splice(4, 0, qam1024);
    } else if (dft) {
      const bpsk = { label: 'π/2 BPSK', value: '1' };
      arr.splice(0, 0, bpsk);
    }
    return arr;
  });

  const mcsTables = useComputed$(() => {
    if (ul && dft) {
      return [
        { label: '64qam (6.1.4.1-1)', value: 'dftQam64' },
        { label: '256qam (5.1.3.1-2)', value: 'qam256' },
        {
          label: '64qam low spectral efficiency (6.1.4.1-2)',
          value: 'dftQam64LowSE',
        },
      ];
    }

    const arr = [
      { label: '64qam (5.1.3.1-1)', value: 'qam64' },
      { label: '256qam (5.1.3.1-2)', value: 'qam256' },
      {
        label: '64qam low spectral efficiency (5.1.3.1-3)',
        value: 'qam64LowSE',
      },
    ];

    if (!ul) {
      const qam1024 = { label: '1024qam (5.1.3.1-4)', value: 'qam1024' };
      arr.push(qam1024);
    }

    return arr;
  });

  const mcsIndexes = useComputed$(() => {
    const table = selectedMcsTable.value;
    const mcsTable = mcstables[table];
    const map = mcsTable.map((_, index) => {
      return { label: index + '', value: index + '' };
    });
    return map;
  });

  useTask$(({ track }) => {
    track(() => selectedMod.value);
    track(() => selectedMcsTable.value);
    track(() => selectedMcsIndex.value);
    track(() => selectedModulationOrder.value);
    track(() => selectedCodeRate.value);

    if (selectedValue == null) return;

    let mod;
    if (selectedMod.value == '-1') {
      const mcsTable = selectedMcsTable.value;
      mod = getModulation(parseInt(selectedMcsIndex.value), mcsTable);
    } else if (selectedMod.value == '-2') {
      mod = {
        modOrder: parseInt(selectedModulationOrder.value),
        codeRate: selectedCodeRate.value,
      };
    } else {
      mod = {
        modOrder: parseInt(selectedMod.value),
        codeRate: 948 / 1024,
      };
    }

    if (mod == null) {
      mod = {
        modOrder: 0,
        codeRate: 0,
      };
    }

    selectedValue.value = mod;
  });

  return (
    <>
      <SelectInput
        label={`${prefix} Modulation`}
        labelClass="text-center"
        options={modulationOptions.value}
        selectedValue={selectedMod}
        hidden={hidden}
      />
      <SelectInput
        label={`${prefix} MCS Table`}
        labelClass="text-center"
        options={mcsTables.value}
        selectedValue={selectedMcsTable}
        hidden={hidden || selectedMod.value !== '-1'}
      />
      <SelectInput
        label={`${prefix} MCS Index`}
        labelClass="text-center"
        options={mcsIndexes.value}
        selectedValue={selectedMcsIndex}
        hidden={hidden || selectedMod.value !== '-1'}
      />
      <SelectInput
        label={`${prefix} Modulation Order`}
        labelClass="text-center"
        options={modulationOrderOptions.value}
        selectedValue={selectedModulationOrder}
        hidden={hidden || selectedMod.value !== '-2'}
      />
      <NumberInput
        label={`${prefix} Code Rate`}
        labelClass="text-center"
        selectedValue={selectedCodeRate}
        hidden={hidden || selectedMod.value !== '-2'}
      />
    </>
  );
});
