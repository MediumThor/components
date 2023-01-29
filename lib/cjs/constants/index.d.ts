import { ChainId, JSBI, Percent, Token } from '@arcanumdex/sdk';
import { AbstractConnector } from '@web3-react/abstract-connector';
import BN from 'bn.js';
export declare const BIG_INT_ZERO: any;
export declare const BIG_INT_TWO: any;
export declare const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare const NATIVE = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
export declare const BIG_INT_SECONDS_IN_WEEK: any;
export declare const ONE_TOKEN: any;
export declare const ROUTER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ROUTER_DAAS_ADDRESS: {
    [chainId in ChainId]: string;
};
type ChainTokenList = {
    readonly [chainId in ChainId]: Token[];
};
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export declare const CUSTOM_BASES: {
    [chainId in ChainId]?: {
        [tokenAddress: string]: Token[];
    };
};
export declare const NetworkContextName = "NETWORK";
export declare const INITIAL_ALLOWED_SLIPPAGE = 50;
export declare const DEFAULT_DEADLINE_FROM_NOW = "600";
export declare const MINICHEF_ADDRESS: {
    [chainId in ChainId]: string | undefined;
};
export declare const PANGOCHEF_ADDRESS: {
    [chainId in ChainId]: string | undefined;
};
export declare const TRUSTED_TOKEN_ADDRESSES: {
    readonly [chainId in ChainId]: string[];
};
export declare const SWAP_DEFAULT_CURRENCY: {
    [x: number]: {
        inputCurrency: any;
        outputCurrency: any;
    };
};
export declare const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList;
export declare const ONE_BIPS: any;
export declare const BIPS_BASE: any;
export declare const ALLOWED_PRICE_IMPACT_LOW: Percent;
export declare const ALLOWED_PRICE_IMPACT_MEDIUM: Percent;
export declare const ALLOWED_PRICE_IMPACT_HIGH: Percent;
export declare const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent;
export declare const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent;
export declare const MIN_ETH: JSBI;
export declare const PANGOLIN_TOKENS_REPO_RAW_BASE_URL = "https://raw.githubusercontent.com/pangolindex/tokens";
export type LogoSize = 24 | 48;
export declare const ANALYTICS_PAGE = "https://info.pangolin.exchange";
export declare const PANGOLIN_API_BASE_URL = "https://api.pangolin.exchange";
export declare const TIMEFRAME: {
    description: string;
    label: string;
    interval: number;
    momentIdentifier: string;
    days: string;
}[];
export declare const SUBGRAPH_BASE_URL = "https://api.thegraph.com/subgraphs/name/pangolindex";
export declare const LANDING_PAGE = "https://pangolin.exchange";
export declare const SUPPORTED_WALLETS: {
    [key: string]: WalletInfo;
};
export declare const PROVIDER_MAPPING: {
    [chainId in ChainId]: (provider: any) => any;
};
export declare const AVALANCHE_CHAIN_PARAMS: {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: string[];
    blockExplorerUrls: string[];
};
export declare const IS_IN_IFRAME: boolean;
export interface WalletInfo {
    connector?: AbstractConnector | any;
    name: string;
    iconName: string;
    description: string;
    href: string | null;
    color: string;
    primary?: true;
    mobile?: true;
    mobileOnly?: true;
    isEVM?: boolean;
}
export declare const DIRECTUS_URL_NEWS = "https://pangolin.directus.app";
export declare const COINGEKO_BASE_URL = "https://api.coingecko.com/api/v3";
export declare const NEAR_API_BASE_URL = "https://testnet-indexer.ref-finance.com";
export declare const OPEN_API_DEBANK = "https://openapi.debank.com/v1/user";
export declare const COINGECKO_API = "https://api.coingecko.com/api/v3";
export declare const ONE_YOCTO_NEAR = "0.000000000000000000000001";
export declare const NEAR_STORAGE_PER_TOKEN = "0.005";
export declare const NEAR_STORAGE_TO_REGISTER_WITH_FT = "0.1";
export declare const NEAR_MIN_DEPOSIT_PER_TOKEN: BN;
export declare const NEAR_MIN_DEPOSIT_PER_TOKEN_FARM: BN;
export declare const NEAR_ACCOUNT_MIN_STORAGE_AMOUNT = "0.005";
export declare const NEAR_LP_STORAGE_AMOUNT = "0.01";
export declare const ONLY_ZEROS: RegExp;
export declare const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList;
export declare const PINNED_PAIRS: {
    readonly [chainId in ChainId]?: [Token, Token][];
};
export declare const SAR_STAKING_ADDRESS: {
    [chainId in ChainId]: string | undefined;
};
export declare enum SwapTypes {
    MARKET = "MARKET",
    LIMIT = "LIMIT"
}
export declare const PANGOCHEF_COMPOUND_SLIPPAGE: any;
export declare const ONE_FRACTION: any;
export declare const COINGECKO_CURRENCY_ID: {
    [chainId in ChainId]: string | undefined;
};
export {};
