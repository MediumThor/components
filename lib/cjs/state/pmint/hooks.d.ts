import { Currency, CurrencyAmount, Pair, Percent, Price, TokenAmount } from '@arcanumdex/sdk';
import { AppState } from 'src/state';
import { PairState } from '../../data/Reserves';
import { Field } from './actions';
export declare function useMintState(): AppState['pmint'];
export declare function useDerivedMintInfo(currencyA: Currency | undefined, currencyB: Currency | undefined): {
    dependentField: Field;
    currencies: {
        [field in Field]?: Currency;
    };
    pair?: Pair | null;
    pairState: PairState;
    currencyBalances: {
        [field in Field]?: CurrencyAmount;
    };
    parsedAmounts: {
        [field in Field]?: CurrencyAmount;
    };
    price?: Price;
    noLiquidity?: boolean;
    liquidityMinted?: TokenAmount;
    poolTokenPercentage?: Percent;
    error?: string;
};
export declare function useMintActionHandlers(noLiquidity: boolean | undefined): {
    onFieldAInput: (typedValue: string) => void;
    onFieldBInput: (typedValue: string) => void;
};
