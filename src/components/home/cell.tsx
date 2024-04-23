import { component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface Props {
  title?: string;
  description?: string;
  url?: string;
}

export default component$((props: Props) => {
  const { description, title, url } = props;
  const outputRef = useSignal<Element>();

  return (
    <Link
      class={
        'my-2 flex h-[150px] w-full overflow-hidden bg-black p-2 text-center text-lg text-white focus:outline-none  focus:ring focus:ring-gray-400'
      }
      ref={outputRef}
      href={url}
    >
      <div class={'m-auto break-words'}>
        <span>{title}</span>
        {title && description && <br />}
        <span>{description}</span>
      </div>
    </Link>
  );
});
