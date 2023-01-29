import { PangoChefInfo } from 'src/state/ppangoChef/types';
export interface ClaimProps {
    stakingInfo: PangoChefInfo;
    onClose: () => void;
    redirectToCompound: () => void;
}
declare const ClaimRewardV3: ({ stakingInfo, onClose, redirectToCompound }: ClaimProps) => JSX.Element;
export default ClaimRewardV3;
