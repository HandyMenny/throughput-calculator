import { type Signal, component$, useSignal, useTask$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import NumberInput from '../input/number-input';
import { getBwsSupported, getRb } from '~/helpers/calculator-lte';
import type { rb_bw_map } from '~/helpers/db/lte-rb-bw-map';

interface Props {
  selectedRBsDl: Signal<number>;
  selectedRBsUl: Signal<number>;
  hideDl?: boolean;
  hideUl?: boolean;
  prefixDl: string;
  prefixUl: string;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const {
    prefixDl,
    prefixUl,
    selectedRBsDl,
    selectedRBsUl,
    hidden,
    hideDl,
    hideUl,
  } = props;
  const selectedBw = useSignal<string>('20');
  const manualRbDl = useSignal<number>(100);
  const manualRbUl = useSignal<number>(100);

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
    track(() => manualRbDl.value);
    track(() => manualRbUl.value);

    const rb = { dl: 0, ul: 0 };
    if (selectedBw.value == 'manual') {
      rb.dl = manualRbDl.value;
      rb.ul = manualRbUl.value;
    } else {
      rb.dl = rb.ul = getRb(selectedBw.value as rb_bw_map.lteBWs);
    }
    selectedRBsDl.value = rb.dl;
    selectedRBsUl.value = rb.ul;
  });

  return (
    <>
      <SelectInput
        label={`Bandwdith`}
        labelClass="text-center"
        options={bandwidthOptions}
        selectedValue={selectedBw}
        hidden={hidden}
      />
      <NumberInput
        label={`${prefixDl} RBs`}
        labelClass="text-center"
        selectedValue={manualRbDl}
        hidden={hidden || selectedBw.value !== 'manual' || hideDl}
      />
      <NumberInput
        label={`${prefixUl} RBs`}
        labelClass="text-center"
        selectedValue={manualRbUl}
        hidden={hidden || selectedBw.value !== 'manual' || hideUl}
      />
    </>
  );
});
