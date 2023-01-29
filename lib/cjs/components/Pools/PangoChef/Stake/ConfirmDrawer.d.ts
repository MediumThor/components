import { Currency, CurrencyAmount, Token } from '@arcanumdex/sdk';
import React from 'react';
import { SpaceType } from 'src/state/pstake/types';
interface Props {
    isOpen: boolean;
    attemptingTxn: boolean;
    txHash?: string;
    errorMessage?: string;
    type: SpaceType;
    onClose: () => void;
    onStake: () => Promise<void>;
    tokens: (Token | Currency)[];
    amount: CurrencyAmount | undefined;
    dollarValue: string;
    apr: string;
}
declare const ConfirmDrawer: React.FC<Props>;
export default ConfirmDrawer;
