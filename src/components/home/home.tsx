import { component$ } from '@builder.io/qwik';

import Title from '../header/title';
import Cell from './cell';

export default component$(() => {
  const items = [
    {
      title: 'LTE',
      description: 'Throughput Calculator',
      link: './lte',
    },
    {
      title: 'LTE-NR DC',
      description: 'Throughput Calculator',
      link: './lte-nr-dc',
    },
    {
      title: 'NR',
      description: 'Throughput Calculator',
      link: './nr',
    },
    {
      title: 'WiFi',
      description: 'Throughput Calculator',
      link: './wifi',
    },
  ];

  return (
    <>
      <Title text="Throughput Calculator" addClasses="text-3xl" />
      <div class="mx-auto w-full max-w-3xl p-6">
        <div class={'grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2'}>
          {items.map((item) => (
            <Cell
              key={item.title}
              title={item.title}
              description={item.description}
              url={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
});
