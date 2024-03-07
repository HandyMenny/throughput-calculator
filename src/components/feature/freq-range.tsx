import { type Signal, component$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import type { FreqRangeType } from '~/@types/layer-nr';

interface Props {
  selectedValue?: Signal<FreqRangeType>;
}

export default component$(({ selectedValue }: Props) => {
  const rangeOptions = [
    { label: 'FR1 (< 6GHz)', value: 'fr1' },
    { label: 'FR2 (mmWave)', value: 'fr2' },
  ];

  return (
    <SelectInput
      label={'Frequency Range'}
      labelClass="text-center"
      options={rangeOptions}
      selectedValue={selectedValue}
    />
  );
});
