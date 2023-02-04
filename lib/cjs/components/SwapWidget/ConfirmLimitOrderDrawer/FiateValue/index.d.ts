/// <reference types="react" />
import { CurrencyAmount, Percent } from '@_arcanumdex/sdk';
export declare function FiatValue({ fiatValue, priceImpact, }: {
    fiatValue: CurrencyAmount | null | undefined;
    priceImpact?: Percent;
}): JSX.Element;
