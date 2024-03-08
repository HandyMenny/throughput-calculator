import { type Signal, component$, useComputed$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import type { DuplexType } from '~/@types/layer-nr';

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
      // remove ul
      arr.splice(1, 1);
    } else if (duplex == 'SUL') {
      // remove dl + ul and dl
      arr.splice(0, 2);
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
