import { StakingInfo } from 'src/state/pstake/types';
export interface PoolCardV1Props {
    stakingInfo: StakingInfo;
    onClickViewDetail: () => void;
    version: number;
}
declare const PoolCardV1: ({ stakingInfo, onClickViewDetail, version }: PoolCardV1Props) => JSX.Element;
export default PoolCardV1;
