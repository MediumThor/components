import { Token } from '@pangolindex/sdk';
import React from 'react';
type Props = {
    isOpen: boolean;
    clickedLpTokens: Array<Token>;
    onClose: () => void;
    onAddToFarm?: () => void;
    backgroundColor?: string;
};
declare const AddLiquidityDrawer: React.FC<Props>;
export default AddLiquidityDrawer;
