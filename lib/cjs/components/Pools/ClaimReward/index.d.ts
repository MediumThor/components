import { StakingInfo } from 'src/state/pstake/types';
export interface ClaimProps {
    stakingInfo: StakingInfo;
    version: number;
    onClose: () => void;
}
declare const ClaimReward: ({ stakingInfo, version, onClose }: ClaimProps) => JSX.Element;
export default ClaimReward;
