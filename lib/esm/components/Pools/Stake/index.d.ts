/// <reference types="react" />
import { SpaceType, StakingInfo } from 'src/state/pstake/types';
interface StakeProps {
    version: number;
    onComplete?: () => void;
    type: SpaceType.card | SpaceType.detail;
    stakingInfo: StakingInfo;
    combinedApr?: number;
}
declare const Stake: ({ version, onComplete, type, stakingInfo, combinedApr }: StakeProps) => JSX.Element;
export default Stake;
