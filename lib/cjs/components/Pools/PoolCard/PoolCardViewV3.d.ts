/// <reference types="react" />
import { Token } from '@_arcanumdex/sdk';
import { PangoChefInfo } from 'src/state/ppangoChef/types';
export interface PoolCardViewProps {
    stakingInfo: PangoChefInfo;
    onClickViewDetail: () => void;
    version: number;
    rewardTokens?: Array<Token | null | undefined> | null;
}
declare const PoolCardViewV3: ({ stakingInfo, onClickViewDetail, version, rewardTokens }: PoolCardViewProps) => JSX.Element;
export default PoolCardViewV3;
