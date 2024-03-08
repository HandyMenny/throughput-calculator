import {
  component$,
  useComputed$,
  useSignal,
  useStore,
  useTask$,
} from '@builder.io/qwik';
import LayerNr from '../feature/layer-nr';
import Button from '../input/button';
import type { Throughput, UlTxSwitchPair } from '~/@types/layer-nr';
import { bpsToMbps, calculateUlTxSwitchReduction } from '~/helpers/calculator';

export default component$(() => {
  const count = useSignal(1);
  const speeds: Throughput[] = useStore([{ dl: 0, ul: 0 }]);
  const ulTxSwitchPairs: UlTxSwitchPair[] = useStore([
    { id: 0, on: false, mimo: 1, airtime: 1, throughput: 1 },
  ]);
  const txReductions: number[] = useStore([0]);

  const totalSpeed = useComputed$(() => {
    return speeds.reduce((prev, curr) => {
      const newTput = { dl: 0, ul: 0 };
      newTput.dl = prev.dl + curr.dl;
      newTput.ul = prev.ul + curr.ul;
      return newTput;
    });
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
      <h1 class="text-center text-2xl">
        Total Throughput: {bpsToMbps(totalSpeed.value.dl)} Mbps /{' '}
        {bpsToMbps(totalSpeed.value.ul - txReduction.value.txReduction)} Mbps
      </h1>
      {[...Array(count.value).keys()].map((value) => (
        <div key={`nr-${value}`}>
          <LayerNr
            speed={speeds[value]}
            ulTxSwitchPair={ulTxSwitchPairs[value]}
            txReduction={txReductions[value]}
          />
        </div>
      ))}
      <div class="flex flex-wrap gap-x-4 px-4">
        <Button
          type="button"
          label="Remove"
          hidden={count.value < 2}
          onClick$={async () => {
            if (count.value > 1) {
              count.value--;
              speeds.pop();
              ulTxSwitchPairs.pop();
              txReductions.pop();
            }
          }}
        />
        <Button
          type="button"
          label="Add"
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
          }}
        />
      </div>
    </div>
  );
});
