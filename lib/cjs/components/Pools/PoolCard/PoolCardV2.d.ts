/// <reference types="react" />
import { MinichefStakingInfo } from 'src/state/pstake/types';
export interface PoolCardProps {
    stakingInfo: MinichefStakingInfo;
    onClickViewDetail: () => void;
    version: number;
}
declare const PoolCardV2: ({ stakingInfo, onClickViewDetail, version }: PoolCardProps) => JSX.Element;
export default PoolCardV2;
