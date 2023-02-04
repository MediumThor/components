import { Currency, CurrencyAmount, Pair, Percent, TokenAmount } from '@_arcanumdex/sdk';
import { AppState } from 'src/state';
import { Field } from './actions';
export declare function useBurnState(): AppState['pburn'];
export declare function useDerivedBurnInfo(currencyA: Currency | undefined, currencyB: Currency | undefined): {
    pair?: Pair | null;
    parsedAmounts: {
        [Field.LIQUIDITY_PERCENT]: Percent;
        [Field.LIQUIDITY]?: TokenAmount;
        [Field.CURRENCY_A]?: CurrencyAmount;
        [Field.CURRENCY_B]?: CurrencyAmount;
    };
    error?: string;
    userLiquidity?: TokenAmount;
};
export declare function useBurnActionHandlers(): {
    onUserInput: (field: Field, typedValue: string) => void;
};
