import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import FormWifi from '~/components/form/form-wifi';

export default component$(() => {
  return (
    <>
      <FormWifi />
    </>
  );
});

export const head: DocumentHead = {
  title: 'WiFi Throughput',
  meta: [
    {
      name: 'description',
      content: 'WiFi 4/5/6/7 Throughput Calculator',
    },
  ],
};
