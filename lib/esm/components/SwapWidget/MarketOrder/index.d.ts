import React from 'react';
import { SwapTypes } from 'src/constants';
interface Props {
    swapType: string;
    setSwapType: (value: SwapTypes) => void;
    isLimitOrderVisible: boolean;
    showSettings: boolean;
    partnerDaaS?: string;
    defaultInputAddress?: string;
    defaultOutputAddress?: string;
}
declare const MarketOrder: React.FC<Props>;
export default MarketOrder;
