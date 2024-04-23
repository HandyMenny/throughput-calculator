import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import FormNr from '~/components/form/form-nr';

export default component$(() => {
  return (
    <>
      <FormNr />
    </>
  );
});

export const head: DocumentHead = {
  title: 'NR Throughput',
  meta: [
    {
      name: 'description',
      content: 'NR Throughput Calculator',
    },
  ],
};
