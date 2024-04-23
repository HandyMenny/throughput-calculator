import {
  component$,
  useComputed$,
  useSignal,
  useStore,
} from '@builder.io/qwik';
import Button from '../input/button';
import type { Throughput } from '~/@types/layer-lte';
import Throughtput from '../feature/throughtput';
import LayerLte from '../feature/layer-lte';
import Title from '../header/title';

export default component$(() => {
  const count = useSignal(1);
  const speeds: Throughput[] = useStore([{ dl: 0, ul: 0 }]);
  const deleted = useStore<number[]>([]);

  const totalSpeed = useComputed$(() => {
    console.log('calculate speed');
    return speeds.reduce((prev, curr) => {
      const newTput = { dl: 0, ul: 0 };
      newTput.dl = prev.dl + curr.dl;
      newTput.ul = prev.ul + curr.ul;
      return newTput;
    });
  });

  return (
    <>
      <Title text="LTE Throughput" addClasses="text-3xl" />
      <div class="p-2">
        <Throughtput
          class="text-center text-2xl font-bold leading-9"
          dl={totalSpeed.value.dl}
          ul={totalSpeed.value.ul}
          dlUlSeparator="/"
          iconSize={22}
          iconStroke={2.4}
        />
        {[...Array(count.value).keys()]
          .filter((it) => !deleted.includes(it))
          .map((value) => (
            <div key={`nr-${value}`}>
              <LayerLte
                speed={speeds[value]}
                onDelete$={async () => {
                  deleted.push(value);
                  speeds[value] = { dl: 0, ul: 0 };
                }}
              />
            </div>
          ))}
        <div class="flex flex-wrap gap-x-4 px-4">
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
    </>
  );
});
