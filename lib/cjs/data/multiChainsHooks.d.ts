import { ChainId } from '@_arcanumdex/sdk';
import { useNearPairs, usePairs } from './Reserves';
export declare type UsePairsHookType = {
    [chainId in ChainId]: typeof usePairs | typeof useNearPairs;
};
export declare const usePairsHook: UsePairsHookType;
