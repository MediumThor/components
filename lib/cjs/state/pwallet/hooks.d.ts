/// <reference types="react" />
import { BigNumber } from '@ethersproject/bignumber';
import { TransactionResponse } from '@ethersproject/providers';
import { ChainId, Currency, CurrencyAmount, Pair, Percent, Token, TokenAmount } from '@_arcanumdex/sdk';
import { ApprovalState } from 'src/hooks/useApproveCallback';
/**
 * Returns a map of the given addresses to their eventually consistent ETH balances.
 */
export declare function useETHBalances(chainId: ChainId, uncheckedAddresses?: (string | undefined)[]): {
    [address: string]: CurrencyAmount | undefined;
};
/**
 * Returns a Near Wallet balance.
 */
export declare function useNearBalance(chainId: ChainId, accounts?: (string | undefined)[]): {
    [address: string]: any;
} | undefined;
/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */
export declare function useTokenBalancesWithLoadingIndicator(address?: string, tokens?: (Token | undefined)[]): [{
    [tokenAddress: string]: TokenAmount | undefined;
}, boolean];
export declare function useTokenBalances(address?: string, tokens?: (Token | undefined)[]): {
    [tokenAddress: string]: TokenAmount | undefined;
};
export declare function useNearTokenBalances(address?: string, tokensOrPairs?: (Token | Pair | undefined)[]): {
    [tokenAddress: string]: TokenAmount | undefined;
};
export declare function useTokenBalance(account?: string, token?: Token): TokenAmount | undefined;
export declare function useNearTokenBalance(account?: string, tokenOrPair?: Token | Pair): TokenAmount | undefined;
export declare function useCurrencyBalances(chainId: ChainId, account?: string, currencies?: (Currency | undefined)[]): (CurrencyAmount | undefined)[];
export declare function useCurrencyBalance(chainId: ChainId, account?: string, currency?: Currency): CurrencyAmount | undefined;
export declare function useAllTokenBalances(): {
    [tokenAddress: string]: TokenAmount | undefined;
};
export interface AddLiquidityProps {
    parsedAmounts: {
        CURRENCY_A?: CurrencyAmount;
        CURRENCY_B?: CurrencyAmount;
    };
    deadline: BigNumber | undefined;
    noLiquidity: boolean | undefined;
    allowedSlippage: number;
    currencies: {
        CURRENCY_A?: Currency;
        CURRENCY_B?: Currency;
    };
}
export declare function useAddLiquidity(): (data: AddLiquidityProps) => Promise<TransactionResponse | undefined>;
export declare function useNearAddLiquidity(): (data: AddLiquidityProps) => Promise<void>;
export interface RemoveLiquidityProps {
    parsedAmounts: {
        LIQUIDITY_PERCENT: Percent;
        LIQUIDITY?: TokenAmount;
        CURRENCY_A?: CurrencyAmount;
        CURRENCY_B?: CurrencyAmount;
    };
    deadline: BigNumber | undefined;
    allowedSlippage: number;
    approval: ApprovalState;
}
interface AttemptToApproveProps {
    parsedAmounts: {
        LIQUIDITY_PERCENT: Percent;
        LIQUIDITY?: TokenAmount;
        CURRENCY_A?: CurrencyAmount;
        CURRENCY_B?: CurrencyAmount;
    };
    deadline: BigNumber | undefined;
    approveCallback: () => void;
}
export declare function useRemoveLiquidity(pair?: Pair | null | undefined): {
    removeLiquidity: (data: RemoveLiquidityProps) => Promise<TransactionResponse | undefined>;
    onAttemptToApprove: (data1: AttemptToApproveProps) => Promise<void>;
    signatureData: {
        v: number;
        r: string;
        s: string;
        deadline: number;
    } | null;
    setSignatureData: import("react").Dispatch<import("react").SetStateAction<{
        v: number;
        r: string;
        s: string;
        deadline: number;
    } | null>>;
};
export declare function useNearRemoveLiquidity(pair: Pair): {
    removeLiquidity: (data: RemoveLiquidityProps) => Promise<void>;
    onAttemptToApprove: () => void;
    signatureData: undefined;
    setSignatureData: () => void;
};
export declare function useGetUserLP(): {
    v2IsLoading: boolean;
    allV2PairsWithLiquidity: Pair[];
    allPairs: Pair[];
};
export declare function useGetNearUserLP(): {
    v2IsLoading: boolean;
    allV2PairsWithLiquidity: Pair[];
};
export interface CreatePoolProps {
    tokenA?: Token;
    tokenB?: Token;
}
export declare function useNearCreatePool(): (data: CreatePoolProps) => Promise<void>;
export {};
