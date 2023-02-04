import { Trade } from '@_arcanumdex/sdk';
export declare enum SwapCallbackState {
    INVALID = 0,
    LOADING = 1,
    VALID = 2
}
export declare function useSwapCallback(trade: Trade | undefined, // trade to execute, required
allowedSlippage: number | undefined, // in bips
recipientAddressOrName: string | null): {
    state: SwapCallbackState;
    callback: null | (() => Promise<string>);
    error: string | null;
};
export declare function useNearSwapCallback(trade: Trade | undefined, // trade to execute, required
_allowedSlippage: number | undefined, // in bips
recipientAddressOrName: string | null): {
    state: SwapCallbackState;
    callback: null | (() => Promise<string>);
    error: string | null;
};
