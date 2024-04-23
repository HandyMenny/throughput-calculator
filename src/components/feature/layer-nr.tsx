import {
  type PropFunction,
  component$,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';
import SelectInput from '../input/select-input';
import { calculateOne, dftPrb } from '~/helpers/calculator';
import type {
  Modulation,
  LayerNr,
  FreqRangeType,
  TDDRatioPercent,
  DuplexType,
  Throughput,
  UlTxSwitchPair,
  Overhead,
} from '~/@types/layer-nr';
import FreqRange from './freq-range';
import Scs from './scs';
import Bandwidth from './bandwidth-nr';
import ModulationNr from './modulation-nr';
import TddRatioNr from './tdd-ratio-nr';
import Duplex from './duplex';
import Aggregate from './aggregate';
import Throughtput from './throughtput';
import OverheadNr from './overhead-nr';
import ButtonIcon from '../input/button-icon';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  TrashIcon,
} from 'qwik-feather-icons';

interface Props {
  speed: Throughput;
  ulTxSwitchPair: UlTxSwitchPair;
  txReduction: number;
  onDelete$: PropFunction<() => void>;
}

export default component$(
  ({ speed, ulTxSwitchPair, txReduction, onDelete$ }: Props) => {
    const selectedRange = useSignal<FreqRangeType>('fr1');
    const selectedDuplex = useSignal<DuplexType>('FDD');
    // 0 = 15, 1 = 30 etc...
    const selectedNumerology = useSignal<string>('0');
    const selectedModDl = useSignal<Modulation>({ modOrder: 0, codeRate: 0 });
    const selectedModUl = useSignal<Modulation>({ modOrder: 0, codeRate: 0 });
    const selectedMimoDl = useSignal<string>('2');
    const selectedMimoUl = useSignal<string>('1');
    const selectedWaveform = useSignal<string>('');
    const selectedRbDl = useSignal<number>(106);
    const selectedRbUl = useSignal<number>(106);
    const tddRatio = useSignal<TDDRatioPercent>({
      dl: 0.74,
      ul: 0.23,
      periodicity: 1,
    });
    const selectedOverhead = useSignal<Overhead>({ dl: 0, ul: 0 });
    const selectedAggregate = useSignal<string>('dl-ul');
    const collapsed = useSignal<boolean>(false);

    const mimoDlOptions = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '6', value: '6' },
      { label: '7', value: '7' },
      { label: '8', value: '8' },
    ];

    const mimoUlOptions = useComputed$(() => {
      const arr = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
      ];
      if (selectedWaveform.value == 'true') arr.pop();
      return arr;
    });

    const waveformOptions = [
      { label: 'CP-OFDM', value: 'false' },
      { label: 'DFT-s-OFDM', value: 'true' },
    ];

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(
      ({ track }) => {
        console.log('layer nr speed calculation');
        track(() => selectedRange.value);
        track(() => selectedDuplex.value);
        track(() => selectedNumerology.value);
        track(() => selectedModDl.value);
        track(() => selectedModUl.value);
        track(() => selectedMimoDl.value);
        track(() => selectedMimoUl.value);
        track(() => selectedWaveform.value);
        track(() => selectedRbDl.value);
        track(() => selectedRbUl.value);
        track(() => selectedAggregate.value);
        track(() => tddRatio.value);
        track(() => selectedOverhead.value);

        const numerology = parseInt(selectedNumerology.value);
        const range = selectedRange.value;
        const dft = selectedWaveform.value == 'true';
        const rbDl = selectedRbDl.value;
        let rbUl = selectedRbUl.value;
        if (dft) rbUl = dftPrb(rbUl);

        const modDl: Modulation = selectedModDl.value;
        const modUl: Modulation = selectedModUl.value;

        let dlRatio = 1;
        let ulRatio = 1;

        if (selectedDuplex.value == 'TDD') {
          dlRatio = tddRatio.value.dl;
          ulRatio = tddRatio.value.ul;
        }

        if (
          selectedDuplex.value == 'SUL' ||
          !selectedAggregate.value.includes('dl')
        ) {
          dlRatio = 0;
        }

        if (
          selectedDuplex.value == 'SDL' ||
          !selectedAggregate.value.includes('ul')
        ) {
          ulRatio = 0;
        }

        const layer: LayerNr = {
          range: range,
          numerology: numerology,
          duplex: selectedDuplex.value,
          resourceBlocksDl: rbDl,
          resourceBlocksUl: rbUl,
          mimoDl: parseInt(selectedMimoDl.value),
          mimoUl: parseInt(selectedMimoUl.value),
          modDl: modDl,
          modUl: modUl,
          dlPercentage: dlRatio,
          ulPercentage: ulRatio,
          ulTransformPrecoding: dft,
          dlOverhead: selectedOverhead.value.dl,
          ulOverhead: selectedOverhead.value.ul,
        };

        speed.dl = calculateOne(layer, 'dl');
        speed.ul = calculateOne(layer, 'ul');

        ulTxSwitchPair.on = selectedAggregate.value.includes('ul-tx-switch');
        if (ulTxSwitchPair.on) {
          ulTxSwitchPair.airtime = layer.ulPercentage;
          ulTxSwitchPair.throughput = speed.ul;
          ulTxSwitchPair.mimo = layer.mimoUl;
        }
      },
      { strategy: 'document-ready' },
    );

    const showDl = useComputed$(() => selectedDuplex.value !== 'SUL');
    const showUl = useComputed$(() => selectedDuplex.value !== 'SDL');
    const showTDD = useComputed$(() => selectedDuplex.value === 'TDD');
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
            ulReduction={txReduction}
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
          ulReduction={txReduction}
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
          <FreqRange selectedValue={selectedRange} />
          <Duplex
            selectedRange={selectedRange.value}
            selectedValue={selectedDuplex}
            hidden={selectedRange.value == 'fr2'}
          />
          <Scs
            selectedRange={selectedRange.value}
            selectedValue={selectedNumerology}
          />
          <Bandwidth
            prefixDl={'Downlink'}
            prefixUl={'Uplink'}
            selectedRange={selectedRange.value}
            numerology={parseInt(selectedNumerology.value)}
            selectedRBsDl={selectedRbDl}
            selectedRBsUl={selectedRbUl}
            dftUl={selectedWaveform.value == 'true'}
            hideDl={!showDl.value}
            hideUl={!showUl.value}
          />
          <SelectInput
            label={'Downlink MIMO Layers'}
            labelClass="text-center"
            options={mimoDlOptions}
            selectedValue={selectedMimoDl}
            hidden={!showDl.value}
          />
          <SelectInput
            label={'Uplink MIMO Layers'}
            labelClass="text-center"
            options={mimoUlOptions.value}
            selectedValue={selectedMimoUl}
            hidden={!showUl.value}
          />
          <ModulationNr
            prefix={'Downlink'}
            selectedValue={selectedModDl}
            hidden={!showDl.value}
          />
          <ModulationNr
            prefix={'Uplink'}
            selectedValue={selectedModUl}
            ul={true}
            dft={selectedWaveform.value == 'true'}
            hidden={!showUl.value}
          />
          <SelectInput
            label={'Uplink Waveform'}
            labelClass="text-center"
            options={waveformOptions}
            selectedValue={selectedWaveform}
            hidden={!showUl.value}
          />
          <TddRatioNr
            numerology={parseInt(selectedNumerology.value)}
            selectedValue={tddRatio}
            hidden={!showTDD.value}
          />
          <OverheadNr
            selectedRange={selectedRange.value}
            selectedValue={selectedOverhead}
          />
          <Aggregate
            selectedDuplex={selectedDuplex.value}
            selectedValue={selectedAggregate}
          />
        </div>
      </div>
    );
  },
);
