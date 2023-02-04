import { Pair, Price, Token, TokenAmount } from '@_arcanumdex/sdk';
/**
 * Returns the tokens price in relation to gas coin (avax, wagmi, flare, etc)
 *
 * @param tokens array of tokens to get the price in wrapped gas coin
 * @returns object where the key is the address of the token and the value is the Price
 */
export declare function useTokensCurrencyPrice(tokens: (Token | undefined)[]): {
    [x: string]: Price;
};
/**
 * Returns the token price in relation to gas coin (avax, wagmi, flare, etc)
 *
 * @param token token to get the price
 * @returns the price of token in relation to gas coin
 */
export declare function useTokenCurrencyPrice(token: Token | undefined): Price;
/**
 * Returns the price of pairs in relation to gas coin
 *
 * @param pairs array of pair and total supply of pair
 * @returns object where the key is the address of the pair and the value is the Price
 */
export declare function usePairsCurrencyPrice(pairs: {
    pair: Pair;
    totalSupply: TokenAmount;
}[]): {
    [key: string]: Price;
};
/**
 * Returns the price of pair in relation to gas coin
 *
 * @param pair the pair and the total supply of pair
 * @returns the price of pair in relation to gas coin
 */
export declare function usePairCurrencyPrice(pair: {
    pair: Pair | null;
    totalSupply: TokenAmount | undefined;
}): Price;
