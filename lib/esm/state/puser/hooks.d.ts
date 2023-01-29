import { ChainId, Pair, Token } from '@pangolindex/sdk';
export declare function useUserSlippageTolerance(): [number, (slippage: number) => void];
export declare function useAddUserToken(): (token: Token) => void;
export declare function useRemoveUserAddedToken(): (chainId: number, address: string) => void;
export declare function useUserAddedTokens(): Token[];
export declare function useIsExpertMode(): boolean;
export declare function useExpertModeManager(): [boolean, (value: boolean) => void];
export declare function useUserDeadline(): [string, (deadline: string) => void];
/**
 * Given two tokens return the liquidity token that represents its liquidity shares
 * @param tokenA one of the two tokens
 * @param tokenB the other token
 */
export declare function toV2LiquidityToken([tokenA, tokenB]: [Token, Token], chainId: ChainId): Token;
/**
 * Returns all the pairs of tokens that are tracked by the user for the current chain ID.
 */
export declare function useTrackedTokenPairs(): [Token, Token][];
export declare function usePairAdder(): (pair: Pair) => void;
