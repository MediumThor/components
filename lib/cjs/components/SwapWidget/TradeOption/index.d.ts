import React from 'react';
import { SwapTypes } from 'src/constants';
interface Props {
    swapType: string;
    setSwapType: (value: SwapTypes) => void;
    isLimitOrderVisible: boolean;
    showSettings?: boolean;
    openSwapSettings?: () => void;
}
declare const TradeOption: React.FC<Props>;
export default TradeOption;
