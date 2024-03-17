import { type Signal, component$, useComputed$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import type { DuplexType } from '~/@types/layer-lte';

interface Props {
  selectedDuplex: DuplexType;
  selectedValue: Signal<string>;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { selectedDuplex, selectedValue, hidden } = props;

  const aggregateOptions = useComputed$(() => {
    const duplex = selectedDuplex;

    const arr = [
      { label: 'DL + UL', value: 'dl-ul' },
      { label: 'DL', value: 'dl' },
      { label: 'UL', value: 'ul' },
      { label: 'None', value: 'none' },
    ];

    if (duplex == 'SDL') {
      // remove dl + ul
      arr.splice(0, 1);
      // remove Ul
      arr.splice(1, 1);
    }

    return arr;
  });

  return (
    <>
      <SelectInput
        label={'Aggregate'}
        labelClass="text-center"
        options={aggregateOptions.value}
        selectedValue={selectedValue}
        hidden={hidden}
      />
    </>
  );
});
