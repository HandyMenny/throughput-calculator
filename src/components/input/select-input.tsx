import {
  component$,
  useId,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';
import { ChevronDownIcon } from 'qwik-feather-icons';
import type { Signal } from '@builder.io/qwik';

interface Option {
  label: string;
  value: string;
}
interface Props {
  label?: string;
  options: Option[];
  name?: string;
  disabled?: boolean;
  hidden?: boolean;
  selectedValue?: Signal<string>;
  class?: string;
  selectClass?: string;
  labelClass?: string;
}

export default component$((props: Props) => {
  const { label, options, name, disabled, hidden, selectedValue } = props;
  const randId = useId();
  const id = `text-input-${randId}`;
  const outputRef = useSignal<HTMLSelectElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    ({ track }) => {
      track(() => options);
      const select = outputRef.value;
      if (selectedValue != undefined && select != undefined) {
        selectedValue.value = select.value;
      }
    },
    { strategy: 'document-ready' },
  );

  return (
    <div
      class={
        'relative flex flex-col' +
        (hidden ? ' hidden' : '') +
        (props.class ? ` ${props.class}` : '')
      }
      aria-hidden={hidden}
    >
      <label
        for={id}
        aria-label={label}
        aria-hidden={hidden}
        class={'my-2' + (props.labelClass ? ` ${props.labelClass}` : '')}
      >
        {label}
      </label>
      <select
        ref={outputRef}
        id={id}
        onInput$={(_, currentTarget) => {
          if (selectedValue != undefined)
            selectedValue.value = currentTarget.value;
        }}
        class={
          'appearance-none border-2 border-solid border-gray-500 bg-white p-2 px-2.5 pr-[40px] focus:outline-none focus:ring focus:ring-gray-400 disabled:border-gray-500 disabled:bg-gray-300' +
          (props.selectClass ? ` ${props.selectClass}` : '')
        }
        name={name}
        disabled={disabled}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={selectedValue?.value == option.value ? true : undefined}
          >
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        size={28}
        strokeWidth={1.3}
        color={disabled ? 'rgb(106, 112, 129)' : undefined}
        class="pointer-events-none absolute bottom-[0.4em] right-[0.5em]"
      />
    </div>
  );
});
