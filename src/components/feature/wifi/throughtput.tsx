import { component$ } from '@builder.io/qwik';
import { autoScaleSpeed } from '~/helpers/calculator-wifi';
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from 'qwik-feather-icons';

interface Props {
  dl: number;
  ul: number;
  dlUlSeparator?: string;
  class: string;
  iconSize: number;
  iconStroke: number;
}

export default component$((props: Props) => {
  const { dl, ul, iconSize, iconStroke } = props;

  const dlUlSeparator = props.dlUlSeparator ?? '';

  const dlResult = autoScaleSpeed(dl);
  const ulResult = autoScaleSpeed(ul);

  return (
    <div class={props.class}>
      <ArrowDownCircleIcon
        class="box-content inline px-1.5 pb-[5px]"
        size={iconSize}
        strokeWidth={iconStroke}
      />
      {dlResult.value} {dlResult.unit}
      <span class="px-1.5">{dlUlSeparator}</span>
      {ulResult.value}
      <ArrowUpCircleIcon
        class="box-content inline px-1.5 pb-[5px]"
        size={iconSize}
        strokeWidth={iconStroke}
      />
    </div>
  );
});
