/// <reference types="react" />
import { Currency, CurrencyAmount, Percent, Price } from '@_arcanumdex/sdk';
import { Field } from 'src/state/pmint/actions';
interface BarProps {
    currencies: {
        [field in Field]?: Currency;
    };
    noLiquidity?: boolean;
    poolTokenPercentage?: Percent;
    price?: Price;
    parsedAmounts: {
        [field in Field]?: CurrencyAmount;
    };
}
declare const PoolPriceBar: ({ currencies, noLiquidity, poolTokenPercentage, price, parsedAmounts }: BarProps) => JSX.Element;
export default PoolPriceBar;
