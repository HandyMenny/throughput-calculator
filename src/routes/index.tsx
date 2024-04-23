import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Home from '~/components/home/home';

export default component$(() => {
  return (
    <>
      <Home />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Throughput calculator',
  meta: [
    {
      name: 'description',
      content: 'Throughput calculator',
    },
  ],
};
