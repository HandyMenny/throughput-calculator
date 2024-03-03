import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Form from '~/components/form/form';

export default component$(() => {
  return (
    <>
      <Form />
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
