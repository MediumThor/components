import { ChainId } from '@pangolindex/sdk';
import { useNearPairs, usePairs } from './Reserves';
export type UsePairsHookType = {
    [chainId in ChainId]: typeof usePairs | typeof useNearPairs;
};
export declare const usePairsHook: UsePairsHookType;
