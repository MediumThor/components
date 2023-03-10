import { Currency } from '@_arcanumdex/sdk';
export declare enum WrapType {
    NOT_APPLICABLE = 0,
    WRAP = 1,
    UNWRAP = 2
}
/**
 * Given the selected input and output currency, return a wrap callback
 * @param inputCurrency the selected input currency
 * @param outputCurrency the selected output currency
 * @param typedValue the user input value
 */
export declare function useWrapCallback(inputCurrency: Currency | undefined, outputCurrency: Currency | undefined, typedValue: string | undefined): {
    wrapType: WrapType;
    execute?: undefined | (() => Promise<void>);
    inputError?: string;
};
/**
 * Given the selected input and output currency, return a wrap callback
 * @param inputCurrency the selected input currency
 * @param outputCurrency the selected output currency
 * @param typedValue the user input value
 */
export declare function useWrapNearCallback(inputCurrency: Currency | undefined, outputCurrency: Currency | undefined, typedValue: string | undefined): {
    wrapType: WrapType;
    execute?: () => Promise<void>;
    inputError?: string;
};
