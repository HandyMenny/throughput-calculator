import {
  type Signal,
  component$,
  useComputed$,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import {
  getClosestTbsIndex,
  getTbsIndexFromMcs,
} from '~/helpers/calculator-lte';
import type { McsTablesLTE } from '~/@types/layer-lte';
import { mcstables } from '~/helpers/db/lte-mcs-tables';

interface Props {
  selectedValue?: Signal<string>;
  prefix?: string;
  ul?: boolean;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { prefix, selectedValue, ul, hidden } = props;

  const selectedMod = useSignal<string>('6');
  const selectedMcsTable = useSignal<McsTablesLTE>('qam64pdsch');
  const selectedMcsIndex = useSignal<string>('0');

  const modulationOptions = useComputed$(() => {
    const arr = [
      { label: 'QPSK', value: '2' },
      { label: '16QAM', value: '4' },
      { label: '64QAM', value: '6' },
      { label: '256QAM', value: '8' },
      { label: 'MCS index', value: '-1' },
    ];

    if (!ul) {
      const qam1024 = { label: '1024QAM', value: '10' };
      arr.splice(4, 0, qam1024);
    }
    return arr;
  });

  const mcsTables = useComputed$(() => {
    if (ul) {
      return [
        { label: '64qam (8.6.1-1)', value: 'qam64pusch' },
        { label: '256qam (8.6.1-3)', value: 'qam256pusch' },
      ];
    }

    const arr = [
      { label: '64qam (7.1.7.1-1)', value: 'qam64pdsch' },
      { label: '256qam (7.1.7.1-1A)', value: 'qam256pdsch' },
      { label: '1024qam (7.1.7.1-1B)', value: 'qam1024pdsch' },
      { label: '6 bit (7.1.7.1-1C)', value: 'bit6pdsch' },
    ];

    return arr;
  });

  const mcsIndexes = useComputed$(() => {
    const table = selectedMcsTable.value;
    const mcsTable = mcstables[table];
    const map = mcsTable.standard.map((value, index) => {
      return { label: index + ' - TBS ' + value, value: index + '' };
    });
    Object.keys(mcsTable.alternative).map((key) => {
      (mcsTable.alternative as any)[key].map((it: string, altInd: number) => {
        map.push({ label: key + ' - TBS ' + it, value: key + '-' + (altInd + 1) })
      })
    });

    return map;
  });

  useTask$(({ track }) => {
    track(() => selectedMod.value);
    track(() => selectedMcsTable.value);
    track(() => selectedMcsIndex.value);

    if (selectedValue == null) return;

    let mod;
    if (selectedMod.value == '-1') {
      const mcsTable = selectedMcsTable.value;
      const index = selectedMcsIndex.value
      const alt = parseInt(selectedMcsIndex.value.split("-")[1] || '0')
      mod = getTbsIndexFromMcs(parseInt(index), mcsTable, alt);
    } else {
      mod = getClosestTbsIndex(parseInt(selectedMod.value), ul ? 'ul' : 'dl');
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
    </>
  );
});
