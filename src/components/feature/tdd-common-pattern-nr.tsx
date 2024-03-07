import { type Signal, component$, useSignal, useTask$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import NumberInput from '../input/number-input';
import type { TDDCommonPattern } from '~/@types/layer-nr';

interface Props {
  selectedValue?: Signal<TDDCommonPattern>;
  suffix: string;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { selectedValue, suffix, hidden } = props;
  const selectedPeriodicity = useSignal<string>('5');
  const dlSlots = useSignal<number>(7);
  const ulSlots = useSignal<number>(2);
  const dlSymbols = useSignal<number>(6);
  const ulSymbols = useSignal<number>(4);

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

  useTask$(({ track }) => {
    track(() => selectedPeriodicity.value);
    track(() => dlSlots.value);
    track(() => ulSlots.value);
    track(() => dlSymbols.value);
    track(() => ulSymbols.value);

    if (selectedValue == null) return;

    const periodicity = parseFloat(selectedPeriodicity.value);

    const pattern: TDDCommonPattern = {
      periodicity: periodicity,
      dlSlots: dlSlots.value,
      dlSymbols: dlSymbols.value,
      ulSlots: ulSlots.value,
      ulSymbols: ulSymbols.value,
    };

    selectedValue.value = pattern;
  });

  return (
    <>
      <SelectInput
        label={`Periodicity ${suffix}`}
        labelClass="text-center"
        options={periodicityOptions}
        selectedValue={selectedPeriodicity}
        hidden={hidden}
      />
      <NumberInput
        label={`Slots DL ${suffix}`}
        labelClass="text-center"
        selectedValue={dlSlots}
        hidden={hidden}
      />
      <NumberInput
        label={`Slots UL ${suffix}`}
        labelClass="text-center"
        selectedValue={ulSlots}
        hidden={hidden}
      />
      <NumberInput
        label={`Symbols DL ${suffix}`}
        labelClass="text-center"
        selectedValue={dlSymbols}
        hidden={hidden}
      />
      <NumberInput
        label={`Symbols UL ${suffix}`}
        labelClass="text-center"
        selectedValue={ulSymbols}
        hidden={hidden}
      />
    </>
  );
});
