import {
  type PropFunction,
  component$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';
import type { Throughput } from '~/@types/layer-nr';
import Throughtput from './throughtput';
import type { WiFiStandard, Modulation, LayerWifi } from '~/@types/layer-wifi';
import Standard from './standard';
import ModulationWifi from './modulation-wifi';
import MimoWifi from './mimo-wifi';
import BandwidthWifi from './bandwidth-wifi';
import {
  getSubCarriers,
  layerWifiTputCalculator,
} from '~/helpers/calculator-wifi';
import GuardIntervalWifi from './guard-interval-wifi';
import NumberInput from '~/components/input/number-input';
import ButtonIcon from '~/components/input/button-icon';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  TrashIcon,
} from 'qwik-feather-icons';

interface Props {
  speed: Throughput;
  onDelete$: PropFunction<() => void>;
}

export default component$(({ speed, onDelete$ }: Props) => {
  const selectedStandard = useSignal<WiFiStandard>('ht');
  const selectedBw = useSignal<number>(20);
  const selectedMimo = useSignal<number>(2);
  const selectedMod = useSignal<Modulation>({ modOrder: 6, codeRate: 5 / 6 });
  const selectedGi = useSignal<number>((0.4 ** 10) ^ -6);
  const selectedOverhead = useSignal<number>(0);
  const collapsed = useSignal<boolean>(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    ({ track }) => {
      console.log('layer wifi speed calculation');
      track(() => selectedStandard.value);
      track(() => selectedBw.value);
      track(() => selectedMimo.value);
      track(() => selectedMod.value);
      track(() => selectedGi.value);
      track(() => selectedOverhead.value);

      const layer: LayerWifi = {
        standard: selectedStandard.value,
        subCarriers:
          getSubCarriers(selectedBw.value, selectedStandard.value) || 0,
        mimo: selectedMimo.value,
        mod: selectedMod.value,
        guardInterval: selectedGi.value,
        overhead: selectedOverhead.value / 100,
      };

      speed.dl = speed.ul = layerWifiTputCalculator(layer);
    },
    { strategy: 'document-ready' },
  );

  return (
    <div class="m-4 border-2 border-solid border-gray-500 p-4">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex">
          <ButtonIcon
            label="collapse"
            type="button"
            onClick$={async () => {
              collapsed.value = !collapsed.value;
            }}
            Icon={collapsed.value ? ChevronRightIcon : ChevronDownIcon}
          />
        </div>
        <Throughtput
          class="hidden flex-1 text-center text-xl font-semibold leading-8 sm:block"
          dl={speed.dl}
          ul={speed.ul}
          dlUlSeparator="/"
          iconSize={20}
          iconStroke={2}
        />
        <div class="flex">
          <ButtonIcon
            label="remove"
            type="button"
            onClick$={async () => {
              onDelete$();
            }}
            Icon={TrashIcon}
          />
        </div>
      </div>
      <Throughtput
        class="text-center text-xl font-semibold leading-8 sm:hidden"
        dl={speed.dl}
        ul={speed.ul}
        dlUlSeparator="/"
        iconSize={20}
        iconStroke={2}
      />
      <div
        class={
          'grid grid-cols-1 items-end gap-x-5 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6' +
          (collapsed.value ? ' hidden' : '')
        }
      >
        {' '}
        <Standard selectedValue={selectedStandard} />
        <BandwidthWifi
          standard={selectedStandard.value}
          selectedValue={selectedBw}
        />
        <MimoWifi
          standard={selectedStandard.value}
          selectedValue={selectedMimo}
        />
        <ModulationWifi
          standard={selectedStandard.value}
          mimo={selectedMimo.value}
          bw={selectedBw.value}
          selectedValue={selectedMod}
        />
        <GuardIntervalWifi
          standard={selectedStandard.value}
          selectedValue={selectedGi}
        />
        <NumberInput
          label={'Overhead %'}
          labelClass="text-center"
          min={0}
          max={100}
          selectedValue={selectedOverhead}
        />
      </div>
    </div>
  );
});
