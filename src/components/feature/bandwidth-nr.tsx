import {
  type Signal,
  component$,
  useComputed$,
  useSignal,
  useTask$,
  $,
} from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import NumberInput from '../input/number-input';
import { getBwsSupported, getPrb } from '~/helpers/calculator';
import type { FreqRangeType } from '~/@types/layer-nr';

interface Props {
  selectedRange: FreqRangeType;
  selectedScs: number;
  selectedRBsDl: Signal<number>;
  selectedRBsUl: Signal<number>;
  hideDl?: boolean;
  hideUl?: boolean;
  prefixDl: string;
  prefixUl: string;
  dftUl?: boolean;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const {
    prefixDl,
    prefixUl,
    selectedRBsDl,
    selectedRBsUl,
    selectedRange,
    selectedScs,
    dftUl,
    hidden,
    hideDl,
    hideUl,
  } = props;
  const selectedBw = useSignal<string>('');
  const manualRbDl = useSignal<number>(100);
  const manualRbUl = useSignal<number>(100);

  const prbLabel = $(
    (
      bw: number,
      scs: number,
      range: FreqRangeType,
      dftUl: boolean | undefined,
      includeDl: boolean,
      includeUl: boolean,
    ) => {
      const ulRb = getPrb(bw, scs, range, dftUl)?.toString();
      const dlRb = getPrb(bw, scs, range)?.toString();

      let rb = dlRb;

      if (dlRb != ulRb && includeUl) {
        if (includeDl) {
          rb = `${dlRb}/${ulRb}`;
        } else {
          rb = ulRb;
        }
      }

      return `${bw} MHz (${rb} RB)`;
    },
  );

  const bandwidthOptions = useComputed$(async () => {
    const range = selectedRange;
    const scs = selectedScs;

    if (
      isNaN(scs) ||
      (range == 'fr2' && scs < 2) ||
      (range == 'fr1' && scs > 2)
    ) {
      return [];
    }

    const result = getBwsSupported(range, scs);

    const map = await Promise.all(
      result.map(async (it) => {
        return {
          label: await prbLabel(it, scs, range, dftUl, !hideDl, !hideUl),
          value: it.toString(),
        };
      }),
    );

    const manual = { label: 'Resource Blocks', value: 'manual' };
    map.push(manual);

    return map;
  });

  useTask$(({ track }) => {
    track(() => selectedBw.value);
    track(() => manualRbDl.value);
    track(() => manualRbUl.value);
    track(() => selectedScs);
    track(() => selectedRange);

    const rb = { dl: 0, ul: 0 };
    if (selectedBw.value == 'manual') {
      rb.dl = manualRbDl.value;
      rb.ul = manualRbUl.value;
    } else {
      rb.dl =
        getPrb(parseInt(selectedBw.value), selectedScs, selectedRange) ?? 0;
      rb.ul =
        getPrb(parseInt(selectedBw.value), selectedScs, selectedRange, dftUl) ??
        0;
    }
    selectedRBsDl.value = rb.dl;
    selectedRBsUl.value = rb.ul;
  });

  return (
    <>
      <SelectInput
        label={'Bandwdith'}
        labelClass="text-center"
        options={bandwidthOptions.value}
        selectedValue={selectedBw}
        hidden={hidden}
      />
      <NumberInput
        label={`${prefixDl} RBs`}
        labelClass="text-center"
        selectedValue={selectedRBsDl}
        hidden={hidden || selectedBw.value !== 'manual' || hideDl}
      />
      <NumberInput
        label={`${prefixUl} RBs`}
        labelClass="text-center"
        selectedValue={selectedRBsUl}
        hidden={hidden || selectedBw.value !== 'manual' || hideUl}
      />
    </>
  );
});
