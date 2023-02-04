import React from 'react';
import { StakingInfo } from 'src/state/pstake/types';
declare type Props = {
    isOpen: boolean;
    stakingInfo: StakingInfo;
    onClose: () => void;
    version: number;
    redirectToCompound?: () => void;
};
declare const RemoveDrawer: React.FC<Props>;
export default RemoveDrawer;
