import { type Signal, component$, useSignal, useTask$ } from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import type { TDDRatioMode, TDDRatioPercent } from '~/@types/layer-lte';
import NumberInput from '../input/number-input';
import { tddconfigs } from '~/helpers/db/lte-tdd-config-table';
import { getPercentageTddConfig } from '~/helpers/calculator-lte';

interface Props {
  selectedValue?: Signal<TDDRatioPercent>;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { selectedValue, hidden } = props;
  const selectedTDDRatioMode = useSignal<TDDRatioMode>('percent');
  const dlPercentage = useSignal<number>(74);
  const ulPercentage = useSignal<number>(23);
  const subframesConfig = useSignal<string>('2');
  const specialSubframeConfig = useSignal<string>('7');

  const tddRatioModes = [
    { label: 'DL/UL %', value: 'percent' },
    { label: 'TDD config', value: 'tddconfig' },
  ];

  const subframesConfigOptions = tddconfigs.subframeConfigs.map((_, index) => {
    return {
      label: index + '',
      value: index + '',
    };
  });

  const specialSubframeConfigOptions = tddconfigs.specialSubframeConfigs.map(
    (_, index) => {
      return {
        label: index + '',
        value: index + '',
      };
    },
  );

  useTask$(({ track }) => {
    track(() => selectedTDDRatioMode.value);
    track(() => dlPercentage.value);
    track(() => ulPercentage.value);
    track(() => subframesConfig.value);
    track(() => specialSubframeConfig.value);

    if (selectedValue == null) return;

    let tddRatio: TDDRatioPercent = {
      dl: 1,
      ul: 1,
    };

    if (selectedTDDRatioMode.value == 'percent') {
      tddRatio.dl = dlPercentage.value / 100;
      tddRatio.ul = ulPercentage.value / 100;
    } else {
      const tddConfig =
        tddconfigs.subframeConfigs[parseInt(subframesConfig.value)];

      const ssfConfig =
        tddconfigs.specialSubframeConfigs[
          parseInt(specialSubframeConfig.value)
        ];

      tddRatio = getPercentageTddConfig(tddConfig, ssfConfig);
    }

    tddRatio.dl = Math.max(0, Math.min(tddRatio.dl, 1));
    tddRatio.ul = Math.max(0, Math.min(tddRatio.ul, 1));

    selectedValue.value = tddRatio;
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
      <SelectInput
        label={'Subframes Config'}
        labelClass="text-center"
        options={subframesConfigOptions}
        selectedValue={subframesConfig}
        hidden={hidden || selectedTDDRatioMode.value != 'tddconfig'}
      />
      <SelectInput
        label={'Special Subframe Config'}
        labelClass="text-center"
        options={specialSubframeConfigOptions}
        selectedValue={specialSubframeConfig}
        hidden={hidden || selectedTDDRatioMode.value != 'tddconfig'}
      />
      <NumberInput
        label={'Subframes DL %'}
        labelClass="text-center"
        selectedValue={dlPercentage}
        hidden={hidden || selectedTDDRatioMode.value != 'percent'}
      />
      <NumberInput
        label={'Subframes UL %'}
        labelClass="text-center"
        selectedValue={ulPercentage}
        hidden={hidden || selectedTDDRatioMode.value != 'percent'}
      />
    </>
  );
});
