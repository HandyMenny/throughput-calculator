import { component$ } from '@builder.io/qwik';
import { bpsToMbps } from '~/helpers/calculator';
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from 'qwik-feather-icons';

interface Props {
  dl: number;
  ul: number;
  ulReduction?: number;
  dlUlSeparator?: string;
  class: string;
  iconSize: number;
  iconStroke: number;
}

export default component$((props: Props) => {
  const { dl, ul, iconSize, iconStroke } = props;

  const dlUlSeparator = props.dlUlSeparator ?? '';

  const ulReduction = props.ulReduction ?? 0;

  return (
    <div class={props.class}>
      <ArrowDownCircleIcon
        class="box-content inline px-1.5 pb-[5px]"
        size={iconSize}
        strokeWidth={iconStroke}
      />
      {bpsToMbps(dl)} Mbps
      <span class="px-1.5">{dlUlSeparator}</span>
      {bpsToMbps(ul)}
      {ulReduction > 0 && ` (${bpsToMbps(ul - ulReduction)})`} Mbps
      <ArrowUpCircleIcon
        class="box-content inline px-1.5 pb-[5px]"
        size={iconSize}
        strokeWidth={iconStroke}
      />
    </div>
  );
});
