import { type Signal, component$, useSignal, useTask$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import NumberInput from '../input/number-input';
import { getPercentageFromPatterns } from '~/helpers/calculator';
import TddCommonPatternNr from './tdd-common-pattern-nr';
import type { FlexSymbolsType, TDDCommonPattern } from '~/helpers/layer';

interface Props {
  selectedScs: number;
  selectedValue?: Signal<number[]>;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { selectedValue, selectedScs, hidden } = props;
  const selectedTDDRatioMode = useSignal<string>('');
  const selectedPattern = useSignal<TDDCommonPattern>({
    periodicity: 0,
    dlSlots: 0,
    dlSymbols: 0,
    ulSlots: 0,
    ulSymbols: 0,
  });
  const selectedPattern2 = useSignal<TDDCommonPattern>({
    periodicity: 0,
    dlSlots: 0,
    dlSymbols: 0,
    ulSlots: 0,
    ulSymbols: 0,
  });
  const selectedFlexSymbols = useSignal<FlexSymbolsType>('guard');
  const dlPercentage = useSignal<number>(74);
  const ulPercentage = useSignal<number>(23);

  const tddRatioModes = [
    { label: 'DL/UL percentage', value: 'percentage' },
    { label: 'Common pattern', value: 'pattern' },
    { label: 'Common pattern1 + pattern2', value: 'pattern12' },
  ];

  const flexSymbolsOptions = [
    { label: 'Guard Period', value: 'guard' },
    { label: 'Downlink', value: 'dl' },
    { label: 'Uplink', value: 'ul' },
  ];

  useTask$(({ track }) => {
    track(() => selectedScs);
    track(() => selectedTDDRatioMode.value);
    track(() => selectedFlexSymbols.value);
    track(() => selectedPattern.value);
    track(() => selectedPattern2.value);
    track(() => dlPercentage.value);
    track(() => ulPercentage.value);

    if (selectedValue == null) return;

    let dlRatio = 0;
    let ulRatio = 0;

    if (selectedTDDRatioMode.value.startsWith('pattern')) {
      const flexSymbols = selectedFlexSymbols.value;
      const pattern = selectedPattern.value;
      const pattern2 =
        selectedTDDRatioMode.value == 'pattern12'
          ? selectedPattern2.value
          : undefined;

      const dlUlRatio = getPercentageFromPatterns(
        selectedScs,
        flexSymbols,
        pattern,
        pattern2,
      );
      dlRatio = dlUlRatio.dl;
      ulRatio = dlUlRatio.ul;
    } else {
      dlRatio = dlPercentage.value / 100;
      ulRatio = ulPercentage.value / 100;
    }

    dlRatio = Math.max(0, Math.min(dlRatio, 1));
    ulRatio = Math.max(0, Math.min(ulRatio, 1));

    selectedValue.value = [dlRatio, ulRatio];
  });

  return (
    <>
      <SelectInput
        label={'TDD DL/UL ratio'}
        labelClass="text-center"
        options={tddRatioModes}
        selectedValue={selectedTDDRatioMode}
        hidden={hidden}
      />
      <TddCommonPatternNr
        suffix=""
        selectedValue={selectedPattern}
        hidden={hidden || !selectedTDDRatioMode.value.startsWith('pattern')}
      />
      <TddCommonPatternNr
        suffix="2"
        selectedValue={selectedPattern2}
        hidden={hidden || selectedTDDRatioMode.value !== 'pattern12'}
      />
      <SelectInput
        label={'Flex Symbols'}
        labelClass="text-center"
        options={flexSymbolsOptions}
        selectedValue={selectedFlexSymbols}
        hidden={hidden || !selectedTDDRatioMode.value.startsWith('pattern')}
      />

      <NumberInput
        label={'Slots DL %'}
        labelClass="text-center"
        selectedValue={dlPercentage}
        hidden={hidden || selectedTDDRatioMode.value != 'percentage'}
      />
      <NumberInput
        label={'Slots UL %'}
        labelClass="text-center"
        selectedValue={ulPercentage}
        hidden={hidden || selectedTDDRatioMode.value != 'percentage'}
      />
    </>
  );
});