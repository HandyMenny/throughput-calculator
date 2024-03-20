import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import FormLteNrDc from '~/components/form/form-lte-nr-dc';

export default component$(() => {
  return (
    <>
      <FormLteNrDc />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Tput calculator',
  meta: [
    {
      name: 'description',
      content: 'Tput calculator',
    },
  ],
};
