import { ChainId, Currency, Token } from '@_arcanumdex/sdk';
export declare type TokenReturnType = Token | undefined | null;
export declare function useAllTokens(): {
    [address: string]: Token;
};
export declare function useToken(tokenAddress?: string): TokenReturnType;
export declare function useNearToken(tokenAddress?: string): TokenReturnType;
export declare function useTokens(tokensAddress?: string[]): Array<TokenReturnType> | undefined | null;
export declare function useNearTokens(tokensAddress?: string[]): Array<TokenReturnType> | undefined | null;
export declare function useCurrency(currencyId: string | undefined): Currency | null | undefined;
export declare function useCoinGeckoTokenPrice(coin: Token): {
    tokenUsdPrice: string;
};
export declare function useCoinGeckoTokenPriceChart(coin: Token, days?: string): {
    timestamp: string;
    priceUSD: number;
}[];
export interface CoingeckoData {
    coinId: string;
    homePage: string;
    description: string;
}
/**
 * Get the coingecko data for a token
 * @param coin - Token or Currency
 * @returns CoingeckoData of token if exist in coingecko else null
 * */
export declare function useCoinGeckoTokenData(coin: Token): import("react-query").UseQueryResult<CoingeckoData | null, unknown>;
export declare function useCoinGeckoCurrencyPrice(chainId: ChainId): import("react-query").UseQueryResult<number, unknown>;
