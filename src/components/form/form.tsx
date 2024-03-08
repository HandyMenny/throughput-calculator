import {
  component$,
  useComputed$,
  useSignal,
  useStore,
} from '@builder.io/qwik';
import LayerNr from '../feature/layer-nr';
import Button from '../input/button';
import type { Throughput } from '~/@types/layer-nr';

export default component$(() => {
  const count = useSignal(1);
  const speeds: Throughput[] = useStore([{ dl: 0, ul: 0 }]);

  const totalSpeed = useComputed$(() => {
    return speeds.reduce((prev, curr) => {
      const newTput = { dl: 0, ul: 0 };
      newTput.dl = prev.dl + curr.dl;
      newTput.ul = prev.ul + curr.ul;
      return newTput;
    });
  });

  return (
    <div class="p-2">
      <h1 class="text-center text-2xl">
        Total Throughput: {Math.floor(totalSpeed.value.dl / 10000) / 100} Mbps /{' '}
        {Math.floor(totalSpeed.value.ul / 10000) / 100} Mbps
      </h1>
      {[...Array(count.value).keys()].map((value) => (
        <div key={`nr-${value}`}>
          <LayerNr speed={speeds[value]} />
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
            }
          }}
        />
        <Button
          type="button"
          label="Add"
          onClick$={async () => {
            count.value++;
            speeds.push({ dl: 0, ul: 0 });
          }}
        />
      </div>
    </div>
  );
});
