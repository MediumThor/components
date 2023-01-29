import { Currency, Pair, Token } from '@arcanumdex/sdk';
export interface Balances {
    total: number;
    chains: {
        chainID: number;
        balance: number;
    }[];
}
export interface Protocol {
    id: string;
    name: string;
    url: string;
    logo: string;
}
export declare class TokenDataUser {
    token: Currency | Token;
    price: number;
    amount: number;
    usdValue: number;
    protocol?: Protocol;
    logo?: string;
    constructor(token: Token | Currency, price: number, amount: number, protocol?: Protocol, logo?: string);
}
export declare class PairDataUser {
    pair: Pair;
    usdValue: number;
    protocol?: Protocol;
    logos?: [string, string];
    constructor(pair: Pair, usdValue: number, protocol?: Protocol, logos?: [string, string]);
}
export declare function useGetChainsBalances(): import("react-query").UseQueryResult<Balances | null, unknown>;
export declare function useGetWalletChainTokens(chainId: number): import("react-query").UseQueryResult<(TokenDataUser | PairDataUser)[] | null, unknown>;
