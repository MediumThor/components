import { ChainId } from '@_arcanumdex/sdk';
import { useDummyMinichefHook, useDummyMinichefStakingInfosViaSubgraph, useGetAllFarmData, useGetDummyAllFarmData, useGetMinichefStakingInfosViaSubgraph, useMinichefStakingInfos } from './hooks';
export declare type UseMinichefStakingInfosHookType = {
    [chainId in ChainId]: typeof useMinichefStakingInfos | typeof useDummyMinichefHook;
};
export declare const useMinichefStakingInfosHook: UseMinichefStakingInfosHookType;
export declare type UseGetMinichefStakingInfosViaSubgraphHookType = {
    [chainId in ChainId]: typeof useGetMinichefStakingInfosViaSubgraph | typeof useDummyMinichefStakingInfosViaSubgraph;
};
export declare const useGetMinichefStakingInfosViaSubgraphHook: UseGetMinichefStakingInfosViaSubgraphHookType;
export declare type UseGetAllFarmDataHookType = {
    [chainId in ChainId]: typeof useGetAllFarmData | typeof useGetDummyAllFarmData;
};
export declare const useGetAllFarmDataHook: UseGetAllFarmDataHookType;
