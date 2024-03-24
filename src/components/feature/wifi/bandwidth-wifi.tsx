import { type Signal, component$, useSignal, useTask$ } from '@builder.io/qwik';
import SelectInput from '../../input/select-input';
import type { WiFiStandard } from '~/@types/layer-wifi';
import {
  getBwsSupported,
  mhzToTones,
  tonesToMHz,
} from '~/helpers/calculator-wifi';

interface Props {
  standard: WiFiStandard;
  // mhz for ht/vht, tones for he/eht
  selectedValue: Signal<number>;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { standard, selectedValue, hidden } = props;
  const selectedBw = useSignal<string>('20');

  const bandwidthOptions = (() => {
    const result = getBwsSupported(standard);
    const tones = standard !== 'ht' && standard !== 'vht';

    const map = result.map((it) => {
      let row;

      if (tones) {
        const mhz = tonesToMHz(it);
        row = {
          // use bw as value to be consistend with not-tones
          label: `${it}-tone RU (${mhz} MHz)`,
          value: `${mhz}`,
        };
      } else {
        row = {
          label: `${it} MHz`,
          value: `${it}`,
        };
      }
      return row;
    });

    return map;
  })();

  useTask$(({ track }) => {
    track(() => standard);
    track(() => selectedBw.value);
    if (standard == 'ht' || standard == 'vht') {
      selectedValue.value = parseInt(selectedBw.value);
    } else {
      selectedValue.value = mhzToTones(selectedBw.value) || 0;
    }
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
    </>
  );
});
