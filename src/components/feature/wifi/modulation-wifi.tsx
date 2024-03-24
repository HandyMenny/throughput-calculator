import {
  type Signal,
  component$,
  useComputed$,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import SelectInput from '../../input/select-input';
import type { Modulation, WiFiStandard } from '~/@types/layer-wifi';
import { mcstables } from '~/helpers/db/wifi-mcs-tables';

interface Props {
  selectedValue: Signal<Modulation>;
  mimo: number;
  bw: number;
  standard: WiFiStandard;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { selectedValue, standard, hidden, mimo, bw } = props;

  const selectedCodeRate = useSignal<string>((5 / 6).toString());
  const selectedMod = useSignal<string>('6');
  const selectedMcsIndex = useSignal<string>('7');

  const codeRateOptions = [
    { label: '1/2', value: (1 / 2).toString() },
    { label: '2/3', value: (2 / 3).toString() },
    { label: '3/4', value: (3 / 4).toString() },
    { label: '5/6', value: (5 / 6).toString() },
  ];

  const modulationOptions = useComputed$(() => {
    const arr = [
      { label: 'BPSK', value: '1' },
      { label: 'QPSK', value: '2' },
      { label: '16QAM', value: '4' },
      { label: '64QAM', value: '6' },
      { label: '256QAM', value: '8' },
      { label: '1024QAM', value: '10' },
    ];

    const qam4k = { label: '4KQAM', value: '12' };

    if (standard == 'eht') {
      arr.push(qam4k);
    } else if (standard == 'he') {
      qam4k.label += ' - Out Of Spec';
      arr.push(qam4k);
    } else if (standard == 'vht') {
      arr[5].label += ' - Out Of Spec';
    } else {
      // ht
      arr[4].label += ' - Out Of Spec';
      arr[5].label += ' - Out Of Spec';
    }

    return arr;
  });

  const mcsIndexes = useComputed$(() => {
    const map = mcstables[standard].standard.map((_, index) => {
      return { label: index.toString(), value: index.toString() };
    });

    mcstables[standard].outOfSpec?.map((value) => {
      const addMcs = {
        label: value.label + ' - Out of Spec',
        value: map.length.toString(),
      };
      map.push(addMcs);
    });

    // add custom
    map.push({ label: 'Custom', value: '-1' });

    if (standard == 'vht') {
      map.forEach((it) => {
        if (mcstables.vhtInvalidMCS(bw, mimo, parseInt(it.value))) {
          it.label += ' - Out of Spec';
        }
      });
    }

    return map;
  });

  useTask$(({ track }) => {
    track(() => selectedMcsIndex.value);

    if (selectedMcsIndex.value == '-1') {
      track(() => selectedMod.value);
      track(() => selectedCodeRate.value);
    }

    let mod: Modulation;
    if (selectedMcsIndex.value !== '-1') {
      const mcsIndex = parseInt(selectedMcsIndex.value);
      const standardMcs = mcstables[standard].standard;
      if (standardMcs.length > mcsIndex) {
        mod = standardMcs[mcsIndex];
      } else {
        const outOfSpecMcs = mcstables[standard].outOfSpec || [];
        mod = outOfSpecMcs[mcsIndex - standardMcs.length];
      }
      selectedMod.value = mod.modOrder.toString();
      selectedCodeRate.value = mod.codeRate.toString();
    } else {
      mod = {
        modOrder: parseInt(selectedMod.value),
        codeRate: parseFloat(selectedCodeRate.value),
      };
    }

    selectedValue.value = mod;
  });

  return (
    <>
      <SelectInput
        label={standard == 'ht' ? 'Basic MCS Index' : 'MCS Index'}
        labelClass="text-center"
        options={mcsIndexes.value}
        selectedValue={selectedMcsIndex}
        hidden={hidden}
      />
      <SelectInput
        label={'Modulation'}
        labelClass="text-center"
        options={modulationOptions.value}
        selectedValue={selectedMod}
        hidden={hidden}
        disabled={selectedMcsIndex.value !== '-1'}
      />
      <SelectInput
        label={'Code Rate'}
        labelClass="text-center"
        options={codeRateOptions}
        selectedValue={selectedCodeRate}
        hidden={hidden}
        disabled={selectedMcsIndex.value !== '-1'}
      />
    </>
  );
});
