import {
  type Signal,
  component$,
  useId,
  useVisibleTask$,
  useSignal,
} from '@builder.io/qwik';

interface Props {
  label?: string;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  hidden?: boolean;
  min?: number;
  selectedValue?: Signal<number>;
  labelClass?: string;
}

export default component$((props: Props) => {
  const { label, placeholder, selectedValue, name, disabled, hidden, min } =
    props;
  const randId = useId();
  const id = `number-input-${randId}`;
  const hiddenCssClass = hidden ? 'hidden' : '';
  const outputRef = useSignal<HTMLInputElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      const select = outputRef.value;
      if (selectedValue != undefined && select != undefined) {
        selectedValue.value = parseFloat(select.value);
      }
    },
    { strategy: 'document-ready' },
  );

  return (
    <div class={`relative flex flex-col ${hiddenCssClass}`}>
      <label
        for={id}
        aria-label={label}
        class={'my-2' + (props.labelClass ? ` ${props.labelClass}` : '')}
      >
        {label}
      </label>
      <input
        type="number"
        id={id}
        placeholder={placeholder}
        value={selectedValue?.value}
        class={
          'appearance-none border-2 border-solid border-gray-500 bg-white p-2 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-gray-400 disabled:bg-gray-300 disabled:opacity-70'
        }
        name={name}
        disabled={disabled}
        min={min}
        onInput$={(_, currentTarget) => {
          if (selectedValue == undefined) return;
          const str = currentTarget.value;
          const value = parseFloat(str);
          if (
            !isNaN(value) &&
            str.trim().replaceAll(',', '.') ==
              value.toString().replaceAll(',', '.')
          ) {
            selectedValue.value = value;
          }
        }}
        ref={outputRef}
      />
    </div>
  );
});
