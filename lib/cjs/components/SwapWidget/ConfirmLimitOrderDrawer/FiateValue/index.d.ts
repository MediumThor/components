import { CurrencyAmount, Percent } from '@arcanumdex/sdk';
export declare function FiatValue({ fiatValue, priceImpact, }: {
    fiatValue: CurrencyAmount | null | undefined;
    priceImpact?: Percent;
}): JSX.Element;
