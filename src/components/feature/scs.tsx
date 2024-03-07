import { type Signal, component$, useComputed$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import type { FreqRangeType } from '~/@types/layer-nr';

interface Props {
  selectedRange: FreqRangeType;
  selectedValue?: Signal<string>;
  hidden?: boolean;
}

export default component$(({ selectedValue, selectedRange, hidden }: Props) => {
  const scsOptions = useComputed$(() => {
    const range = selectedRange;
    if (range == 'fr1') {
      return [
        { label: '15 kHz', value: '0' },
        { label: '30 kHz', value: '1' },
        { label: '60 kHz', value: '2' },
      ];
    } else {
      return [
        { label: '60 kHz', value: '2' },
        { label: '120 kHz', value: '3' },
        { label: '480 kHz', value: '5' },
        { label: '960 kHz', value: '6' },
      ];
    }
  });

  return (
    <SelectInput
      label={'SCS'}
      labelClass="text-center"
      options={scsOptions.value}
      selectedValue={selectedValue}
      hidden={hidden}
    />
  );
});
