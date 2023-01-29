import React from 'react';
import { StakingInfo } from 'src/state/pstake/types';
type Props = {
    isOpen: boolean;
    stakingInfo: StakingInfo;
    onClose: () => void;
    version: number;
    backgroundColor?: string;
};
declare const ClaimDrawer: React.FC<Props>;
export default ClaimDrawer;
