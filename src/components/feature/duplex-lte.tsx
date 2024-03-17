import { type Signal, component$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import type { DuplexType } from '~/@types/layer-lte';

interface Props {
  selectedValue?: Signal<DuplexType>;
  hidden?: boolean;
}

export default component$(({ selectedValue, hidden }: Props) => {
  const duplexOptions = [
    { label: 'FDD', value: 'FDD' },
    // tdd disabled
    //{ label: 'TDD', value: 'TDD' },
    { label: 'SDL', value: 'SDL' },
  ];

  return (
    <SelectInput
      label={'Duplex'}
      labelClass="text-center"
      options={duplexOptions}
      selectedValue={selectedValue}
      hidden={hidden}
    />
  );
});
