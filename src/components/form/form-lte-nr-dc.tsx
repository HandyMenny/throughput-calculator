import {
  component$,
  useComputed$,
  useSignal,
  useStore,
  useTask$,
} from '@builder.io/qwik';
import Button from '../input/button';
import type { Throughput, UlTxSwitchPair } from '~/@types/layer-nr';
import { calculateUlTxSwitchReduction } from '~/helpers/calculator';
import Throughtput from '../feature/throughtput';
import LayerLte from '../feature/layer-lte';
import LayerNr from '../feature/layer-nr';

export default component$(() => {
  const count = useSignal(0);
  const type: ('lte' | 'nr')[] = useStore([]);
  const speeds: Throughput[] = useStore([]);
  const ulTxSwitchPairs: UlTxSwitchPair[] = useStore([]);
  const txReductions: number[] = useStore([]);

  const totalSpeed = useComputed$(() => {
    return speeds.reduce(
      (prev, curr) => {
        const newTput = { dl: 0, ul: 0 };
        newTput.dl = prev.dl + curr.dl;
        newTput.ul = prev.ul + curr.ul;
        return newTput;
      },
      { dl: 0, ul: 0 },
    );
  });

  const txReduction = useComputed$(() => {
    let txReduction = { id: -1, txReduction: 0 };

    const ulTxSwitchPairsOn = ulTxSwitchPairs.filter(
      (x) => x.on && x.airtime > 0,
    );

    if (ulTxSwitchPairsOn.length > 2) {
      alert('More than 2 Ul Tx Switch Band Pairs not supported');
      return txReduction;
    }

    const twoTdd = ulTxSwitchPairsOn.filter((x) => x.airtime < 1);

    if (twoTdd.length > 1) {
      alert('TDD + TDD Ul Tx Switch not supported');
      return txReduction;
    }

    if (ulTxSwitchPairsOn.length == 2) {
      txReduction = calculateUlTxSwitchReduction(
        ulTxSwitchPairsOn[0],
        ulTxSwitchPairsOn[1],
      );
    }
    return txReduction;
  });

  useTask$(({ track }) => {
    track(() => txReduction.value);

    for (let i = 0; i < txReductions.length; i++) {
      if (i == txReduction.value.id) {
        txReductions[i] = txReduction.value.txReduction;
      } else {
        txReductions[i] = 0;
      }
    }
  });

  return (
    <div class="p-2">
      <Throughtput
        class="text-center text-2xl font-bold leading-9"
        dl={totalSpeed.value.dl}
        ul={totalSpeed.value.ul}
        dlUlSeparator="/"
        iconSize={22}
        iconStroke={2.4}
      />
      {[...Array(count.value).keys()].map(
        (value) =>
          (type[value] == 'lte' && (
            <div key={`lte-${value}`}>
              <LayerLte speed={speeds[value]} />
            </div>
          )) || (
            <div key={`nr-${value}`}>
              <LayerNr
                speed={speeds[value]}
                ulTxSwitchPair={ulTxSwitchPairs[value]}
                txReduction={txReductions[value]}
              />
            </div>
          ),
      )}
      <div class="flex flex-wrap gap-x-4 px-4">
        <Button
          type="button"
          label="Remove"
          hidden={count.value < 1}
          onClick$={async () => {
            if (count.value > 0) {
              count.value--;
              speeds.pop();
              ulTxSwitchPairs.pop();
              txReductions.pop();
              type.pop();
            }
          }}
        />
        <Button
          type="button"
          label="Add LTE"
          onClick$={async () => {
            count.value++;
            speeds.push({ dl: 0, ul: 0 });
            ulTxSwitchPairs.push({
              id: count.value - 1,
              on: false,
              mimo: 1,
              airtime: 1,
              throughput: 1,
            });
            txReductions.push(0);
            type.push('lte');
          }}
        />
        <Button
          type="button"
          label="Add NR"
          onClick$={async () => {
            count.value++;
            speeds.push({ dl: 0, ul: 0 });
            ulTxSwitchPairs.push({
              id: count.value - 1,
              on: false,
              mimo: 1,
              airtime: 1,
              throughput: 1,
            });
            txReductions.push(0);
            type.push('nr');
          }}
        />
      </div>
    </div>
  );
});
