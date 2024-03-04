import { type Signal, component$, useComputed$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';

interface Props {
  selectedRange: 'fr1' | 'fr2' | 'lte';
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
    } else if (range == 'fr2') {
      return [{ label: 'TDD', value: 'TDD' }];
    } else {
      // lte
      return [
        { label: 'FDD', value: 'FDD' },
        { label: 'TDD', value: 'TDD' },
        { label: 'SDL', value: 'SDL' },
      ];
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
