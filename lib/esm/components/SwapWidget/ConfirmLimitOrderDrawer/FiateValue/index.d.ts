import { CurrencyAmount, Percent } from '@pangolindex/sdk';
export declare function FiatValue({ fiatValue, priceImpact, }: {
    fiatValue: CurrencyAmount | null | undefined;
    priceImpact?: Percent;
}): JSX.Element;
