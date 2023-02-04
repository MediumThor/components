/// <reference types="react" />
import { StakingInfo } from 'src/state/pstake/types';
interface WithdrawProps {
    stakingInfo: StakingInfo;
    version: number;
    onClose: () => void;
    redirectToCompound?: () => void;
}
declare const Remove: ({ stakingInfo, version, onClose, redirectToCompound }: WithdrawProps) => JSX.Element;
export default Remove;
