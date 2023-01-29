import React from 'react';
import { PangoChefInfo } from 'src/state/ppangoChef/types';
interface Props {
    type: string;
    pangoChefStakingInfos: PangoChefInfo[];
    setMenu: (value: string) => void;
    activeMenu: string;
    menuItems: Array<{
        label: string;
        value: string;
    }>;
}
declare const PoolV3: React.FC<Props>;
export default PoolV3;
