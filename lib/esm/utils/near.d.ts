import { Token } from '@_arcanumdex/sdk';
import BN from 'bn.js';
import { providers, transactions } from 'near-api-js';
export interface ViewFunctionOptions {
    methodName: string;
    args?: object;
}
export interface FunctionCallOptions extends ViewFunctionOptions {
    gas?: string;
    amount?: string | null;
}
export interface Transaction {
    receiverId: string;
    functionCalls: FunctionCallOptions[];
}
export interface PoolData {
    id: number;
    token_account_ids: string[];
    token_symbols: string[];
    amounts: string[];
    total_fee: number;
    shares_total_supply: string;
    pool_kind: string;
}
export interface NearTokenMetadata {
    id: string;
    name: string;
    symbol: string;
    decimals: number;
    icon: string;
}
interface StorageDepositActionOptions {
    accountId?: string;
    registrationOnly?: boolean;
    amount: string;
}
interface WithdrawActionOptions {
    tokenId: string;
    amount: string;
    unregister?: boolean;
    singleTx?: boolean;
}
declare class Near {
    viewFunction(tokenId: string, { methodName, args, }: {
        methodName: string;
        args?: object;
    }): Promise<any>;
    getAccountId: () => string;
    getTransaction: (hash: string) => Promise<providers.FinalExecutionOutcome | undefined>;
    getTranctionSummary: (tx: providers.FinalExecutionOutcome) => string;
    getMetadata(tokenAddress: string): Promise<NearTokenMetadata>;
    getTokenBalance(tokenAddress: string, account?: string): Promise<any>;
    getTotalSupply(tokenAddress: string): Promise<any>;
    getExchangeContract(deployer: any, exchange: any): Promise<any>;
    getAllPools(chainId: number): Promise<any>;
    getPoolId(chainId: number, tokenA?: Token, tokenB?: Token): Promise<any>;
    getPool(chainId: number, tokenA?: Token, tokenB?: Token): Promise<PoolData>;
    getSharesInPool(chainId: number, tokenA?: Token, tokenB?: Token): Promise<string>;
    getStorageBalance(contractId: string, account?: string): Promise<{
        total: string;
        available: string;
    } | null>;
    needDepositStorage(contractId: string, account?: string): Promise<boolean>;
    checkUserNeedsStorageDeposit(chainId: number): Promise<string>;
    getWhitelistedTokens(chainId: number): Promise<string[]>;
    createNearTransaction({ receiverId, actions, nonceOffset, }: {
        receiverId: string;
        actions: transactions.Action[];
        nonceOffset?: number;
    }): Promise<transactions.Transaction>;
    getGas: (gas?: string | undefined) => BN;
    getAmount: (amount?: string | null | undefined) => BN;
    executeMultipleTransactions(allTransactions: Transaction[], callbackUrl?: string): Promise<void>;
    storageDepositAction({ accountId, registrationOnly, amount, }: StorageDepositActionOptions): FunctionCallOptions;
    nearDepositAction(amount: string): FunctionCallOptions;
    nearWithdrawAction(amount: string): FunctionCallOptions;
    registerTokenAction(tokenId: string): {
        methodName: string;
        args: {
            token_ids: string[];
        };
        amount: string;
    };
    withdrawAction({ tokenId, amount, unregister }: WithdrawActionOptions): {
        methodName: string;
        args: {
            token_id: string;
            amount: string;
            unregister: boolean;
        };
        amount: string;
    };
    getYourPools(): Promise<PoolData[]>;
}
export declare const nearFn: Near;
export {};
