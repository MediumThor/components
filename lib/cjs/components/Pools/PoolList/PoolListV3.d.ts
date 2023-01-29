import React from 'react';
import { PangoChefInfo } from 'src/state/ppangoChef/types';
export interface EarnProps {
    version: string;
    stakingInfos: PangoChefInfo[];
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
