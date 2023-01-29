import { ChainId } from '@arcanumdex/sdk';
import { useDummyMinichefHook, useDummyMinichefStakingInfosViaSubgraph, useGetAllFarmData, useGetDummyAllFarmData, useGetMinichefStakingInfosViaSubgraph, useMinichefStakingInfos } from './hooks';
export type UseMinichefStakingInfosHookType = {
    [chainId in ChainId]: typeof useMinichefStakingInfos | typeof useDummyMinichefHook;
};
export declare const useMinichefStakingInfosHook: UseMinichefStakingInfosHookType;
export type UseGetMinichefStakingInfosViaSubgraphHookType = {
    [chainId in ChainId]: typeof useGetMinichefStakingInfosViaSubgraph | typeof useDummyMinichefStakingInfosViaSubgraph;
};
export declare const useGetMinichefStakingInfosViaSubgraphHook: UseGetMinichefStakingInfosViaSubgraphHookType;
export type UseGetAllFarmDataHookType = {
    [chainId in ChainId]: typeof useGetAllFarmData | typeof useGetDummyAllFarmData;
};
export declare const useGetAllFarmDataHook: UseGetAllFarmDataHookType;
