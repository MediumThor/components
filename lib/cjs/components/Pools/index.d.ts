import React from 'react';
import { PangoChefInfo } from 'src/state/ppangoChef/types';
import { DoubleSideStakingInfo, MinichefStakingInfo } from 'src/state/pstake/types';
interface Props {
    version: number;
    type: string;
    stakingInfoV1: DoubleSideStakingInfo[];
    miniChefStakingInfo: MinichefStakingInfo[];
    pangoChefStakingInfo: PangoChefInfo[];
    setMenu: (value: string) => void;
    activeMenu: string;
    menuItems: Array<{
        label: string;
        value: string;
    }>;
}
declare const Pools: React.FC<Props>;
export default Pools;
