import { Currency, Price } from '@_arcanumdex/sdk';
/**
 * Returns the price in USDC of the input currency
 * @param currency currency to compute the USDC price of
 */
export declare function useUSDCPrice(currency?: Currency): Price | undefined;
export declare function useNearUSDCPrice(currency?: Currency): Price | undefined;
export declare function useSongBirdUSDPrice(currency?: Currency): Price | undefined;
