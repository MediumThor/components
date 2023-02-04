/// <reference types="react" />
import { StakingInfo } from 'src/state/pstake/types';
interface RemoveFarmProps {
    stakingInfo: StakingInfo;
    version: number;
    onClose: () => void;
    onLoadingOrComplete?: (value: boolean) => void;
    redirectToCompound?: () => void;
}
declare const RemoveFarm: ({ stakingInfo, version, onClose, onLoadingOrComplete, redirectToCompound }: RemoveFarmProps) => JSX.Element;
export default RemoveFarm;
