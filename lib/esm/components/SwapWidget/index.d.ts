import React from 'react';
import { SwapTypes } from 'src/constants';
export interface SwapWidgetProps {
    onSwapTypeChange?: React.Dispatch<React.SetStateAction<SwapTypes>>;
    isLimitOrderVisible?: boolean;
    showSettings?: boolean;
    partnerDaaS?: string;
    defaultInputToken?: string;
    defaultOutputToken?: string;
}
declare const SwapWidget: React.FC<SwapWidgetProps>;
export default SwapWidget;
