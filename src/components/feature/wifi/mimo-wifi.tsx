import {
  type Signal,
  component$,
  useComputed$,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import SelectInput from '../../input/select-input';
import type { WiFiStandard } from '~/@types/layer-wifi';

interface Props {
  selectedValue: Signal<number>;
  standard: WiFiStandard;
  hidden?: boolean;
}

interface Option {
  label: string;
  value: string;
}

export default component$((props: Props) => {
  const { selectedValue, standard, hidden } = props;
  const selectedMimo = useSignal<string>('2');

  const mimoOptions = useComputed$(() => {
    const count = standard == 'ht' ? 4 : 8;
    const arr: Option[] = [];
    for (let i = 1; i <= count; i++) {
      const row = { label: `${i} x ${i}`, value: `${i}` };
      arr.push(row);
    }

    return arr;
  });

  useTask$(({ track }) => {
    track(() => selectedMimo.value);
    selectedValue.value = parseInt(selectedMimo.value);
  });

  return (
    <>
      <SelectInput
        label={'MIMO'}
        labelClass="text-center"
        options={mimoOptions.value}
        selectedValue={selectedMimo}
        hidden={hidden}
      />
    </>
  );
});
