import React from 'react';
import { StakingInfo } from 'src/state/pstake/types';
type Props = {
    stakingInfo: StakingInfo;
    version: number;
    onClose: () => void;
};
declare const Header: React.FC<Props>;
export default Header;
