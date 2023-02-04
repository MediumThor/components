import { Token } from '@_arcanumdex/sdk';
import React from 'react';
declare type Props = {
    isOpen: boolean;
    clickedLpTokens: Array<Token>;
    onClose: () => void;
    backgroundColor?: string;
};
declare const RemoveLiquidityDrawer: React.FC<Props>;
export default RemoveLiquidityDrawer;
