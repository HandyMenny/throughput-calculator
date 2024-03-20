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
  numerology: number;
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
    numerology,
    dftUl,
    hidden,
    hideDl,
    hideUl,
  } = props;
  const selectedBw = useSignal<string>('20');
  const manualRbDl = useSignal<number>(106);
  const manualRbUl = useSignal<number>(106);

  const prbLabel = $(
    (
      bw: number,
      numerology: number,
      range: FreqRangeType,
      dftUl: boolean | undefined,
      includeDl: boolean,
      includeUl: boolean,
    ) => {
      const ulRb = getPrb(bw, numerology, range, dftUl)?.toString();
      const dlRb = getPrb(bw, numerology, range)?.toString();

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
    console.log('calculating bandwidth');
    const range = selectedRange;

    if (
      isNaN(numerology) ||
      (range == 'fr2' && numerology < 2) ||
      (range == 'fr1' && numerology > 2)
    ) {
      return [];
    }

    const result = getBwsSupported(range, numerology);

    const map = await Promise.all(
      result.map(async (it) => {
        return {
          label: await prbLabel(it, numerology, range, dftUl, !hideDl, !hideUl),
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
    track(() => numerology);
    track(() => selectedRange);

    const rb = { dl: 0, ul: 0 };
    if (selectedBw.value == 'manual') {
      rb.dl = manualRbDl.value;
      rb.ul = manualRbUl.value;
    } else {
      rb.dl =
        getPrb(parseInt(selectedBw.value), numerology, selectedRange) ?? 0;
      rb.ul =
        getPrb(parseInt(selectedBw.value), numerology, selectedRange, dftUl) ??
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
