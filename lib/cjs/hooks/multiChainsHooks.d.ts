import { ChainId } from '@arcanumdex/sdk';
import { useNearToken, useNearTokens, useToken, useTokens } from './Tokens';
import { useApproveCallback, useApproveCallbackFromNearTrade, useApproveCallbackFromTrade, useNearApproveCallback } from './useApproveCallback';
import { useNearSwapCallback, useSwapCallback } from './useSwapCallback';
import { useNearUSDCPrice, useSongBirdUSDPrice, useUSDCPrice } from './useUSDCPrice';
import { useWrapCallback, useWrapNearCallback } from './useWrapCallback';
export type UseWrapCallbackHookType = {
    [chainId in ChainId]: typeof useWrapCallback | typeof useWrapNearCallback;
};
export declare const useWrapCallbackHook: UseWrapCallbackHookType;
export type UseTokenHookType = {
    [chainId in ChainId]: typeof useToken | typeof useNearToken;
};
export declare const useTokenHook: UseTokenHookType;
export type UseApproveCallbackFromTradeHookType = {
    [chainId in ChainId]: typeof useApproveCallbackFromTrade | typeof useApproveCallbackFromNearTrade;
};
export declare const useApproveCallbackFromTradeHook: UseApproveCallbackFromTradeHookType;
export type UseSwapCallbackHookType = {
    [chainId in ChainId]: typeof useSwapCallback | typeof useNearSwapCallback;
};
export declare const useSwapCallbackHook: UseSwapCallbackHookType;
export type UseApproveCallbackHookType = {
    [chainId in ChainId]: typeof useApproveCallback | typeof useNearApproveCallback;
};
export declare const useApproveCallbackHook: UseApproveCallbackHookType;
export type UseUSDCPriceHookType = {
    [chainId in ChainId]: typeof useUSDCPrice | typeof useNearUSDCPrice | typeof useSongBirdUSDPrice;
};
export declare const useUSDCPriceHook: UseUSDCPriceHookType;
export type UseTokensHookType = {
    [chainId in ChainId]: typeof useTokens | typeof useNearTokens;
};
export declare const useTokensHook: UseTokensHookType;
