import {
  component$,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import type {
  DuplexType,
  Throughput,
  LayerLte,
  TDDRatioPercent,
} from '~/@types/layer-lte';
import Throughtput from './throughtput';
import { lteCalculator3gpp } from '~/helpers/calculator-lte';
import DuplexLte from './duplex-lte';
import BandwidthLte from './bandwidth-lte';
import ModulationLte from './modulation-lte';
import AggregateLte from './aggregate-lte';
import TddRatioLte from './tdd-ratio-lte';

interface Props {
  speed: Throughput;
}

export default component$(({ speed }: Props) => {
  const selectedDuplex = useSignal<DuplexType>('FDD');
  const selectedModDl = useSignal<string>('26');
  const selectedModUl = useSignal<string>('26');
  const selectedMimoDl = useSignal<string>('2');
  const selectedRbDl = useSignal<number>(100);
  const selectedRbUl = useSignal<number>(100);
  const selectedAggregate = useSignal<string>('');
  const selectedTddRatio = useSignal<TDDRatioPercent>({ dl: 0, ul: 0 });

  const mimoDlOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
  ];

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    ({ track }) => {
      console.log('layer lte speed calculation');
      track(() => selectedDuplex.value);
      track(() => selectedModDl.value);
      track(() => selectedModUl.value);
      track(() => selectedMimoDl.value);
      track(() => selectedRbDl.value);
      track(() => selectedRbUl.value);
      track(() => selectedAggregate.value);
      track(() => selectedTddRatio.value);

      const rbDl = selectedRbDl.value;
      const rbUl = selectedRbUl.value;

      const modDl = selectedModDl.value;
      const modUl = selectedModUl.value;

      let dlRatio = 1;
      let ulRatio = 1;

      if (selectedDuplex.value == 'TDD') {
        dlRatio = selectedTddRatio.value.dl;
        ulRatio = selectedTddRatio.value.ul;
      }

      if (!selectedAggregate.value.includes('dl')) {
        dlRatio = 0;
      }

      if (
        selectedDuplex.value == 'SDL' ||
        !selectedAggregate.value.includes('ul')
      ) {
        ulRatio = 0;
      }

      const layer: LayerLte = {
        duplex: selectedDuplex.value,
        resourceBlocksDl: rbDl,
        resourceBlocksUl: rbUl,
        mimoDl: parseInt(selectedMimoDl.value),
        tbsIndexDl: modDl,
        tbsIndexUl: modUl,
        dlPercentage: dlRatio,
        ulPercentage: ulRatio,
      };

      speed.dl = lteCalculator3gpp(layer, 'dl');
      speed.ul = lteCalculator3gpp(layer, 'ul');
    },
    { strategy: 'document-ready' },
  );

  const showUl = useComputed$(() => selectedDuplex.value !== 'SDL');
  const showTDD = useComputed$(() => selectedDuplex.value === 'TDD');
  return (
    <div class="m-4 border-2 border-solid border-gray-500 p-4">
      <Throughtput
        class="text-center text-xl font-semibold leading-8"
        dl={speed.dl}
        ul={speed.ul}
        dlUlSeparator="/"
        iconSize={20}
        iconStroke={2}
      />
      <div class="grid grid-cols-1 items-end gap-x-5 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <DuplexLte selectedValue={selectedDuplex} />
        <BandwidthLte
          prefixDl={'Downlink'}
          prefixUl={'Uplink'}
          selectedRBsDl={selectedRbDl}
          selectedRBsUl={selectedRbUl}
          hideUl={!showUl.value}
        />
        <SelectInput
          label={'Downlink Mimo Layers'}
          labelClass="text-center"
          options={mimoDlOptions}
          selectedValue={selectedMimoDl}
        />
        <ModulationLte prefix={'Downlink'} selectedValue={selectedModDl} />
        <ModulationLte
          prefix={'Uplink'}
          selectedValue={selectedModUl}
          ul={true}
          hidden={!showUl.value}
        />
        <TddRatioLte selectedValue={selectedTddRatio} hidden={!showTDD.value} />
        <AggregateLte
          selectedDuplex={selectedDuplex.value}
          selectedValue={selectedAggregate}
        />
      </div>
    </div>
  );
});
