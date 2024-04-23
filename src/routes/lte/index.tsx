import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import FormLte from '~/components/form/form-lte';

export default component$(() => {
  return (
    <>
      <FormLte />
    </>
  );
});

export const head: DocumentHead = {
  title: 'LTE Throughput',
  meta: [
    {
      name: 'description',
      content: 'LTE throughput calculator',
    },
  ],
};
