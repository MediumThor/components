import { Currency, CurrencyAmount, Fraction, Percent, TokenAmount } from '@pangolindex/sdk';
import React from 'react';
import { Field } from 'src/state/pmint/actions';
import { SpaceType } from 'src/state/pstake/types';
interface Props {
    isOpen: boolean;
    attemptingTxn: boolean;
    txHash: string | undefined;
    allowedSlippage: number;
    liquidityMinted?: TokenAmount;
    poolErrorMessage: string | undefined;
    onClose: () => void;
    onComplete?: () => void;
    noLiquidity?: boolean;
    price?: Fraction;
    currencies: {
        [field in Field]?: Currency;
    };
    parsedAmounts: {
        [field in Field]?: CurrencyAmount;
    };
    poolTokenPercentage?: Percent;
    onAdd: () => void;
    onAddToFarm?: () => void;
    type: SpaceType.card | SpaceType.detail;
}
declare const ConfirmSwapDrawer: React.FC<Props>;
export default ConfirmSwapDrawer;
