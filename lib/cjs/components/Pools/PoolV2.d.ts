import React from 'react';
import { MinichefStakingInfo } from 'src/state/pstake/types';
interface Props {
    type: string;
    miniChefStakingInfo: MinichefStakingInfo[];
    setMenu: (value: string) => void;
    activeMenu: string;
    menuItems: Array<{
        label: string;
        value: string;
    }>;
}
declare const PoolV2: React.FC<Props>;
export default PoolV2;
