import { ChainId, Currency, CurrencyAmount, Token, TokenAmount } from '@_arcanumdex/sdk';
import { NativeCurrency as UniCurrency, Token as UniToken } from '@uniswap/sdk-core';
export declare function wrappedCurrency(currency: Currency | undefined, chainId: ChainId | undefined): Token | undefined;
export declare function wrappedCurrencyAmount(currencyAmount: CurrencyAmount | undefined, chainId: ChainId | undefined): TokenAmount | undefined;
export declare function wrappedGelatoCurrency(currency: UniCurrency | UniToken, chainId: ChainId | undefined): Token | undefined;
export declare function unwrappedToken(token: Token, chainId: ChainId): Currency | Token;
