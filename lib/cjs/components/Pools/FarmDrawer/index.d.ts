import React from 'react';
import { StakingInfo } from 'src/state/pstake/types';
declare type Props = {
    isOpen: boolean;
    onClose: () => void;
    backgroundColor?: string;
    version: number;
    stakingInfo: StakingInfo;
    combinedApr?: number;
};
declare const FarmDrawer: React.FC<Props>;
export default FarmDrawer;
