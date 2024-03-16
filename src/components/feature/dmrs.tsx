import { type Signal, component$, useSignal, useTask$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import NumberInput from '../input/number-input';
import { calculateDmrsREs } from '~/helpers/calculator';

interface Props {
  selectedValue?: Signal<number>;
  prefix?: string;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { prefix, selectedValue, hidden } = props;

  const selectedDmrsCustom = useSignal<number>(12);
  const selectedDmrsType = useSignal<string>('1');
  const selectedDmrsAddPos = useSignal<number>(1);

  const typeOptions = [
    { label: 'Type 1 Single', value: '1-1' },
    { label: 'Type 2 Single', value: '2-1' },
    { label: 'Type 1 Double', value: '1-2' },
    { label: 'Type 2 Double', value: '2-2' },
    { label: 'Custom', value: '-1' },
  ];

  useTask$(({ track }) => {
    track(() => selectedDmrsCustom.value);
    track(() => selectedDmrsType.value);
    track(() => selectedDmrsAddPos.value);

    if (selectedValue == null) return;

    let dmrs;
    if (selectedDmrsType.value == '-1') {
      dmrs = selectedDmrsCustom.value;
    } else {
      const type = selectedDmrsType.value.startsWith('2') ? 'type2' : 'type1';
      const len = selectedDmrsType.value.endsWith('-2') ? 2 : 1;

      dmrs = calculateDmrsREs(type, len, selectedDmrsAddPos.value);
    }

    selectedValue.value = dmrs;
  });

  return (
    <>
      <SelectInput
        label={`${prefix} DMRS`}
        labelClass="text-center"
        options={typeOptions}
        selectedValue={selectedDmrsType}
        hidden={hidden}
      />
      <NumberInput
        label={`${prefix} DMRS Add. positions`}
        labelClass="text-center"
        min={0}
        max={3}
        selectedValue={selectedDmrsAddPos}
        hidden={hidden || selectedDmrsType.value == '-1'}
      />
      <NumberInput
        label={`${prefix} DMRS REs`}
        labelClass="text-center"
        min={0}
        selectedValue={selectedDmrsCustom}
        hidden={hidden || selectedDmrsType.value !== '-1'}
      />
    </>
  );
});
