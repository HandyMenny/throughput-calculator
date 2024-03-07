import { type Signal, component$, useComputed$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import type { FreqRangeType } from '~/@types/layer-nr';

interface Props {
  selectedRange: FreqRangeType;
  selectedValue?: Signal<string>;
  hidden?: boolean;
}

export default component$(({ selectedValue, selectedRange, hidden }: Props) => {
  const duplexOptions = useComputed$(() => {
    const range = selectedRange;
    if (range == 'fr1') {
      return [
        { label: 'FDD', value: 'FDD' },
        { label: 'TDD', value: 'TDD' },
        { label: 'SDL', value: 'SDL' },
        { label: 'SUL', value: 'SUL' },
      ];
    } else {
      return [{ label: 'TDD', value: 'TDD' }];
    }
  });

  return (
    <SelectInput
      label={'Duplex'}
      labelClass="text-center"
      options={duplexOptions.value}
      selectedValue={selectedValue}
      hidden={hidden}
    />
  );
});
