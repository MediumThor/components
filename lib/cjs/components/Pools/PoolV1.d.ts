import React from 'react';
import { DoubleSideStakingInfo } from 'src/state/pstake/types';
interface Props {
    type: string;
    stakingInfos: DoubleSideStakingInfo[];
    setMenu: (value: string) => void;
    activeMenu: string;
    menuItems: Array<{
        label: string;
        value: string;
    }>;
}
declare const PoolV1: React.FC<Props>;
export default PoolV1;
