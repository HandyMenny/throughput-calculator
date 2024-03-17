import { type Signal, component$, useSignal, useTask$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import NumberInput from '../input/number-input';
import { getBwsSupported, getRb } from '~/helpers/calculator-lte';
import type { rb_bw_map } from '~/helpers/db/lte-rb-bw-map';

interface Props {
  selectedValue?: Signal<number>;
  prefix?: string;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { prefix, selectedValue, hidden } = props;
  const selectedBw = useSignal<string>('20');
  const selectedRb = useSignal<number>(100);

  const bandwidthOptions = (() => {
    const result = getBwsSupported();

    const map = result.map((it) => {
      return {
        label: it + ' MHz (' + getRb(it) + ' RB) ',
        value: it + '',
      };
    });

    const manual = { label: 'Resource Blocks', value: 'manual' };
    map.push(manual);

    return map;
  })();

  useTask$(({ track }) => {
    track(() => selectedBw.value);
    track(() => selectedRb.value);

    if (selectedValue == null) return;

    let rb;
    if (selectedBw.value == 'manual') {
      rb = selectedRb.value;
    } else {
      rb = getRb(selectedBw.value as rb_bw_map.lteBWs);
    }
    selectedValue.value = rb;
  });

  return (
    <>
      <SelectInput
        label={`${prefix} Bandwdith`}
        labelClass="text-center"
        options={bandwidthOptions}
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
