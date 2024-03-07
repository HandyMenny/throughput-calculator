import { type Signal, component$, useSignal, useTask$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import NumberInput from '../input/number-input';
import {
  getFlexibleSymbols,
  getOfdmSymbolDuration,
  getPercentageFromPatterns,
} from '~/helpers/calculator';
import TddCommonPatternNr from './tdd-common-pattern-nr';
import { type TDDCommonPattern } from '~/helpers/layer';

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
  const selectedFlexSymbols = useSignal<string>('');
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
          : null;

      dlRatio =
        getPercentageFromPatterns(
          selectedScs,
          pattern.periodicity,
          pattern.dlSlots,
          pattern.dlSymbols,
          pattern2?.periodicity,
          pattern2?.dlSlots,
          pattern2?.dlSymbols,
        ) * 100;
      ulRatio =
        getPercentageFromPatterns(
          selectedScs,
          pattern.periodicity,
          pattern.ulSlots,
          pattern.ulSymbols,
          pattern2?.periodicity,
          pattern2?.ulSlots,
          pattern2?.ulSymbols,
        ) * 100;

      if (flexSymbols !== 'guard') {
        const flexSymbolsCount = getFlexibleSymbols(
          pattern.dlSymbols,
          pattern.ulSymbols,
          pattern2?.dlSymbols ?? 0,
          pattern2?.ulSymbols ?? 0,
        );
        const symbolDuration = getOfdmSymbolDuration(selectedScs);
        const flexDuration = flexSymbolsCount * 1000 * symbolDuration;
        const totalDuration =
          pattern.periodicity + (pattern2?.periodicity ?? 0);
        if (flexSymbols == 'dl') {
          dlRatio += (flexDuration / totalDuration) * 100;
        } else if (flexSymbols == 'ul') {
          ulRatio += (flexDuration / totalDuration) * 100;
        }
      }
    } else {
      dlRatio = dlPercentage.value;
      ulRatio = ulPercentage.value;
    }

    dlRatio = Math.max(0, Math.min(dlRatio, 100));
    ulRatio = Math.max(0, Math.min(ulRatio, 100));

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
