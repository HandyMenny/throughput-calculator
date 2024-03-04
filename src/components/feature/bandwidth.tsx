import {
  type Signal,
  component$,
  useComputed$,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import NumberInput from '../input/number-input';
import { getBwsSupported, getPrb } from '~/helpers/calculator';

interface Props {
  selectedRange: 'fr1' | 'fr2';
  selectedScs: number;
  selectedValue?: Signal<number>;
  prefix?: string;
  dft?: boolean;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { prefix, selectedValue, selectedRange, selectedScs, dft, hidden } =
    props;
  const selectedBw = useSignal<string>('');
  const selectedRb = useSignal<number>(100);

  const bandwidthOptions = useComputed$(() => {
    const range = selectedRange as 'fr1' | 'fr2';
    const scs = selectedScs;

    if (isNaN(scs)) return [];

    const result = getBwsSupported(range, scs);

    const map = result.map((it) => {
      return {
        label: it + ' MHz (' + getPrb(it, scs, range, dft) + ' RB) ',
        value: it + '',
      };
    });

    const manual = { label: 'Resource Blocks', value: 'manual' };
    map.push(manual);

    return map;
  });

  useTask$(({ track }) => {
    track(() => selectedBw.value);
    track(() => selectedRb.value);
    if (selectedValue == null) return;

    let rb;
    if (selectedBw.value == 'manual') {
      rb = selectedRb.value;
    } else {
      rb = getPrb(parseInt(selectedBw.value), selectedScs, selectedRange, dft);
    }
    selectedValue.value = rb ?? 0;
  });

  return (
    <>
      <SelectInput
        label={`${prefix} Bandwdith`}
        labelClass="text-center"
        options={bandwidthOptions.value}
        selectedValue={selectedBw}
        hidden={hidden}
      />
      <NumberInput
        label={`${prefix} RBs`}
        labelClass="text-center"
        selectedValue={selectedRb}
        hidden={hidden || selectedBw.value !== 'manual'}
      />
    </>
  );
});
