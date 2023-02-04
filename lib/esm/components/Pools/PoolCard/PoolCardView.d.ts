/// <reference types="react" />
import { Token, TokenAmount } from '@_arcanumdex/sdk';
import { StakingInfo } from 'src/state/pstake/types';
export interface PoolCardViewProps {
    stakingInfo: StakingInfo;
    onClickViewDetail: () => void;
    version: number;
    combinedApr?: number;
    earnedAmount: TokenAmount;
    rewardTokens?: Array<Token | null | undefined> | null;
}
declare const PoolCardView: ({ stakingInfo, onClickViewDetail, version, combinedApr, earnedAmount, rewardTokens, }: PoolCardViewProps) => JSX.Element;
export default PoolCardView;
