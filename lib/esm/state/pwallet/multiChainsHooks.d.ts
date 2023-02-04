import { ChainId } from '@_arcanumdex/sdk';
import { useAddLiquidity, useETHBalances, useGetNearUserLP, useGetUserLP, useNearAddLiquidity, useNearBalance, useNearRemoveLiquidity, useNearTokenBalance, useNearTokenBalances, useRemoveLiquidity, useTokenBalance, useTokenBalances } from './hooks';
export declare type UseTokenBalancesHookType = {
    [chainId in ChainId]: typeof useTokenBalances | typeof useNearTokenBalances;
};
export declare const useTokenBalancesHook: UseTokenBalancesHookType;
export declare type UseTokenBalanceHookType = {
    [chainId in ChainId]: typeof useTokenBalance | typeof useNearTokenBalance;
};
export declare const useTokenBalanceHook: UseTokenBalanceHookType;
export declare type UseAccountBalanceHookType = {
    [chainId in ChainId]: typeof useETHBalances | typeof useNearBalance;
};
export declare const useAccountBalanceHook: UseAccountBalanceHookType;
export declare type UseAddLiquidityHookType = {
    [chainId in ChainId]: typeof useAddLiquidity | typeof useNearAddLiquidity;
};
export declare const useAddLiquidityHook: UseAddLiquidityHookType;
export declare type UseRemoveLiquidityHookType = {
    [chainId in ChainId]: typeof useRemoveLiquidity | typeof useNearRemoveLiquidity;
};
export declare const useRemoveLiquidityHook: UseRemoveLiquidityHookType;
export declare type UseGetUserLPHookType = {
    [chainId in ChainId]: typeof useGetUserLP | typeof useGetNearUserLP;
};
export declare const useGetUserLPHook: UseGetUserLPHookType;
