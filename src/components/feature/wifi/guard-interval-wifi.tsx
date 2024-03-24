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
  const selectedGi = useSignal<string>('2');

  const giOptions = useComputed$(() => {
    let arr: Option[];
    if (standard == 'ht' || standard == 'vht') {
      arr = [
        { label: 'short (0.4 μs)', value: 'short' },
        { label: 'long (0.8 μs)', value: 'long' },
      ];
    } else {
      // he or eht
      arr = [
        { label: 'short (0.8 μs)', value: 'short' },
        { label: 'medium (1.6 μs)', value: 'medium' },
        { label: 'long (3.2 μs)', value: 'long' },
      ];
    }

    return arr;
  });

  useTask$(({ track }) => {
    track(() => selectedGi.value);
    track(() => standard);

    if (standard == 'ht' || standard == 'vht') {
      selectedValue.value =
        selectedGi.value == 'short' ? 0.4 * 10 ** -6 : 0.8 * 10 ** -6;
    } else {
      switch (selectedGi.value) {
        case 'short':
          selectedValue.value = 0.8 * 10 ** -6;
          break;
        case 'medium':
          selectedValue.value = 1.6 * 10 ** -6;
          break;
        case 'long':
          selectedValue.value = 3.2 * 10 ** -6;
          break;
      }
    }
  });

  return (
    <>
      <SelectInput
        label={'Guard Interval'}
        labelClass="text-center"
        options={giOptions.value}
        selectedValue={selectedGi}
        hidden={hidden}
      />
    </>
  );
});
