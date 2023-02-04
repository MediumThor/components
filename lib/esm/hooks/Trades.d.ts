import { Currency, CurrencyAmount, Trade } from '@_arcanumdex/sdk';
/**
 * Returns the best trade for the exact amount of tokens in to the given token out
 */
export declare function useTradeExactIn(currencyAmountIn?: CurrencyAmount, currencyOut?: Currency): {
    trade: Trade | null;
    isLoading: boolean;
};
/**
 * Returns the best trade for the token in to the exact amount of token out
 */
export declare function useTradeExactOut(currencyIn?: Currency, currencyAmountOut?: CurrencyAmount): {
    trade: Trade | null;
    isLoading: boolean;
};
