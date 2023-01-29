import React from 'react';
import { MinichefStakingInfo } from 'src/state/pstake/types';
export interface EarnProps {
    version: string;
    stakingInfos: MinichefStakingInfo[];
    poolMap?: {
        [key: string]: number;
    };
    setMenu: (value: string) => void;
    activeMenu: string;
    menuItems: Array<{
        label: string;
        value: string;
    }>;
}
declare const _default: React.NamedExoticComponent<EarnProps>;
export default _default;
