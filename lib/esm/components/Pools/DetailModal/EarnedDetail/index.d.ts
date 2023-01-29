import { StakingInfo } from 'src/state/pstake/types';
export interface EarnDetailProps {
    stakingInfo: StakingInfo;
    version: number;
}
declare const EarnedDetail: ({ stakingInfo, version }: EarnDetailProps) => JSX.Element;
export default EarnedDetail;
