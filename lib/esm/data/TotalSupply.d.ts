import { ChainId, Pair, Token, TokenAmount } from '@arcanumdex/sdk';
export declare function useTotalSupply(token?: Token): TokenAmount | undefined;
export declare function useNearTotalSupply(tokenOrPair?: Token | Pair): TokenAmount | undefined;
export type UseTotalSupplyHookType = {
    [chainId in ChainId]: typeof useTotalSupply | typeof useNearTotalSupply;
};
export declare const useTotalSupplyHook: UseTotalSupplyHookType;
