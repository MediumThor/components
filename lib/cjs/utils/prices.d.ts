import { CurrencyAmount, Percent, Trade } from '@arcanumdex/sdk';
import { Field } from '../state/pswap/actions';
export declare function computeTradePriceBreakdown(trade?: Trade): {
    priceImpactWithoutFee?: Percent;
    realizedLPFee?: Percent;
    realizedLPFeeAmount?: CurrencyAmount;
    daasFeeAmount?: CurrencyAmount;
};
export declare function computeSlippageAdjustedAmounts(trade: Trade | undefined, allowedSlippage: number): {
    [field in Field]?: CurrencyAmount;
};
export declare function warningSeverity(priceImpact: Percent | undefined): 0 | 1 | 2 | 3 | 4;
