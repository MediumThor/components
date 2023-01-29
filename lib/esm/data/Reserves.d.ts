import { Currency, Pair, Token } from '@pangolindex/sdk';
export declare enum PairState {
    LOADING = 0,
    NOT_EXISTS = 1,
    EXISTS = 2,
    INVALID = 3
}
export declare enum PoolType {
    SIMPLE_POOL = "SIMPLE_POOL",
    STABLE_SWAP = "STABLE_SWAP",
    RATED_SWAP = "RATED_SWAP"
}
export declare function usePairs(currencies: [Currency | undefined, Currency | undefined][]): [PairState, Pair | null][];
export declare function usePair(tokenA?: Currency, tokenB?: Currency): [PairState, Pair | null];
export declare function useGetNearAllPool(): import("react-query").UseQueryResult<any, unknown>;
export declare function useNearPairs(currencies: [Currency | undefined, Currency | undefined][]): [PairState, Pair | null][];
export declare function useGetNearPoolId(tokenA?: Token, tokenB?: Token): number | null;
