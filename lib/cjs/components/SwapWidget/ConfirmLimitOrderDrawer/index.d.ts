import { Trade } from '@arcanumdex/sdk';
import React from 'react';
interface Props {
    isOpen: boolean;
    trade: Trade;
    originalTrade: Trade | undefined;
    attemptingTxn: boolean;
    txHash: string | undefined;
    recipient: string | null;
    allowedSlippage: number;
    onAcceptChanges: () => void;
    onConfirm: () => void;
    swapErrorMessage: string | undefined;
    onClose: () => void;
}
declare const ConfirmLimitOrderDrawer: React.FC<Props>;
export default ConfirmLimitOrderDrawer;
