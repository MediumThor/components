/// <reference types="react" />
import { StakingInfo } from 'src/state/pstake/types';
export interface PoolDetailProps {
    onDismiss: () => void;
    stakingInfo: StakingInfo;
    version: number;
}
declare const DetailView: ({ stakingInfo, onDismiss, version }: PoolDetailProps) => JSX.Element;
export default DetailView;
