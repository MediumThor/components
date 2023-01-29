import { ChainId, CurrencyAmount, Trade } from '@arcanumdex/sdk';
export declare enum ApprovalState {
    UNKNOWN = 0,
    NOT_APPROVED = 1,
    PENDING = 2,
    APPROVED = 3
}
export declare function useApproveCallback(chainId: ChainId, amountToApprove?: CurrencyAmount, spender?: string): [ApprovalState, () => Promise<void>];
export declare function useNearApproveCallback(): [ApprovalState, () => Promise<void>];
export declare function useApproveCallbackFromTrade(chainId: ChainId, trade?: Trade, allowedSlippage?: number): [ApprovalState, () => Promise<void>];
export declare function useApproveCallbackFromNearTrade(_chainId: ChainId, _trade?: Trade, _allowedSlippage?: number): [ApprovalState, () => Promise<void>];
export declare function useApproveCallbackFromInputCurrencyAmount(currencyAmountIn: any | undefined): [ApprovalState, () => Promise<void>];
