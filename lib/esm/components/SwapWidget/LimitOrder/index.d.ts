import React from 'react';
import { SwapTypes } from 'src/constants';
interface Props {
    swapType: string;
    setSwapType: (value: SwapTypes) => void;
    isLimitOrderVisible: boolean;
    defaultInputAddress?: string;
    defaultOutputAddress?: string;
}
declare const LimitOrder: React.FC<Props>;
export default LimitOrder;
