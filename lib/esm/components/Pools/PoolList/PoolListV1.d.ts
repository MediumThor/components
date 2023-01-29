import React from 'react';
import { DoubleSideStakingInfo } from 'src/state/pstake/types';
export interface EarnProps {
    version: string;
    stakingInfos: DoubleSideStakingInfo[];
    setMenu: (value: string) => void;
    activeMenu: string;
    menuItems: Array<{
        label: string;
        value: string;
    }>;
}
declare const PoolListV1: React.FC<EarnProps>;
export default PoolListV1;
