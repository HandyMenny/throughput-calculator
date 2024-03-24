import { type Signal, component$ } from '@builder.io/qwik';
import SelectInput from '../../input/select-input';
import type { WiFiStandard } from '~/@types/layer-wifi';

interface Props {
  selectedValue?: Signal<WiFiStandard>;
}

interface Options {
  label: string;
  value: WiFiStandard;
}

export default component$(({ selectedValue }: Props) => {
  const options: Options[] = [
    { label: 'WiFi 4 - 802.11n', value: 'ht' },
    { label: 'WiFi 5 - 802.11ac', value: 'vht' },
    { label: 'WiFi 6 - 802.11ax', value: 'he' },
    { label: 'WiFi 7 - 802.11be', value: 'eht' },
  ];

  return (
    <SelectInput
      label={'WiFi Type'}
      labelClass="text-center"
      options={options}
      selectedValue={selectedValue}
    />
  );
});
