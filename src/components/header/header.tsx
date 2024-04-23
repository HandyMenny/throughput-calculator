import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const credit = import.meta.env.PUBLIC_CREDIT;
  const creditUrl = import.meta.env.PUBLIC_CREDIT_URL;
  const basePath = import.meta.env.PUBLIC_BASE_PATH || '/';

  return (
    <header class="flex justify-between bg-black px-5 py-2">
      <div>
        <Link
          class="text-xl text-white hover:underline active:underline"
          href={basePath}
          title="Home page"
        >
          Throughput Calculator
        </Link>
      </div>
      <a
        class="text-xl text-white hover:underline active:underline"
        href={creditUrl}
        target="_blank"
      >
        {credit}
      </a>
    </header>
  );
});
