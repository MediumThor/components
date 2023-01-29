import { Order } from '@gelatonetwork/limit-orders-react';
import { ChainId, Currency, CurrencyAmount, Trade } from '@arcanumdex/sdk';
import { ParsedQs } from 'qs';
import { AppState } from 'src/state';
import { FeeInfo, Field } from './actions';
import { SwapParams } from './reducer';
export interface LimitOrderInfo extends Order {
    pending?: boolean;
}
export declare function useSwapState(): AppState['pswap'];
export declare function useSwapActionHandlers(chainId: ChainId): {
    onCurrencySelection: (field: Field, currency: Currency) => void;
    onSwitchTokens: () => void;
    onUserInput: (field: Field, typedValue: string) => void;
    onChangeRecipient: (recipient: string | null) => void;
};
export declare function tryParseAmount(value?: string, currency?: Currency, chainId?: ChainId): CurrencyAmount | undefined;
export declare function useDerivedSwapInfo(): {
    currencies: {
        [field in Field]?: Currency;
    };
    currencyBalances: {
        [field in Field]?: CurrencyAmount;
    };
    parsedAmount: CurrencyAmount | undefined;
    v2Trade: Trade | undefined;
    inputError?: string;
    v1Trade: Trade | undefined;
    isLoading: boolean;
};
export declare function parseCurrencyFromURLParameter(urlParam: any, chainId: ChainId): string;
export declare function queryParametersToSwapState(parsedQs: ParsedQs, chainId: ChainId): SwapParams;
export declare function useDefaultsFromURLSearch(): {
    inputCurrencyId: string | undefined;
    outputCurrencyId: string | undefined;
} | undefined;
export declare function useGelatoLimitOrderDetail(order: Order): {
    currency0: any;
    currency1: any;
    inputAmount: any;
    outputAmount: any;
    executionPrice: any;
};
export declare function useGelatoLimitOrderList(): {
    allOrders: any[];
    allOpenOrders: any[];
    allCancelledOrders: Order[];
    executed: Order[];
};
export declare function useDaasFeeTo(): [string, (feeTo: string) => void];
export declare function useDaasFeeInfo(): [FeeInfo, (feeInfo: FeeInfo) => void];
