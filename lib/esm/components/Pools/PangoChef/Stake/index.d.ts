/// <reference types="react" />
import { PangoChefInfo } from 'src/state/ppangoChef/types';
import { SpaceType } from 'src/state/pstake/types';
interface StakeProps {
    onComplete?: () => void;
    type: SpaceType.card | SpaceType.detail;
    stakingInfo: PangoChefInfo;
    combinedApr?: number;
}
declare const Stake: ({ onComplete, type, stakingInfo, combinedApr }: StakeProps) => JSX.Element;
export default Stake;
