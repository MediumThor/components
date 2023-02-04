import { Token } from '@_arcanumdex/sdk';
import React from 'react';
declare type Props = {
    isOpen: boolean;
    clickedLpTokens: Array<Token>;
    onClose: () => void;
    onAddToFarm?: () => void;
    backgroundColor?: string;
};
declare const AddLiquidityDrawer: React.FC<Props>;
export default AddLiquidityDrawer;
