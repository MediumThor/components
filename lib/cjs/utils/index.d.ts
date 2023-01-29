import { BigNumber } from '@ethersproject/bignumber';
import { Contract } from '@ethersproject/contracts';
import { JsonRpcSigner, TransactionResponse, Web3Provider } from '@ethersproject/providers';
import { Chain, ChainId, Currency, CurrencyAmount, Fraction, JSBI, Percent, Token, Trade } from '@pangolindex/sdk';
import { TokenAddressMap } from '../state/plists/hooks';
export declare function isAddress(value: any): string | false;
export declare function getEtherscanLink(chainId: ChainId, data: string, type: 'transaction' | 'token' | 'address' | 'block'): string;
export declare function shortenAddress(address: string, chainId?: ChainId, chars?: number): string;
export declare function calculateGasMargin(value: BigNumber): BigNumber;
export declare function basisPointsToPercent(num: number): Percent;
export declare function getSigner(library: Web3Provider, account: string): JsonRpcSigner;
export declare function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner;
export declare function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract | null;
export declare function getRouterContract(chainId: ChainId, library: Web3Provider, account?: string): Contract | null;
export declare function getRouterContractDaaS(chainId: ChainId, library: Web3Provider, account?: string): Contract | null;
export declare function isTokenOnList(defaultTokens: TokenAddressMap, chainId: ChainId, currency?: Currency): boolean;
/**
 * Returns true if the trade requires a confirmation of details before we can submit it
 * @param tradeA trade A
 * @param tradeB trade B
 */
export declare function tradeMeaningfullyDiffers(tradeA: Trade, tradeB: Trade): boolean;
export declare function getChainByNumber(chainId: ChainId | number): Chain | undefined;
export declare function calculateSlippageAmount(value: CurrencyAmount, slippage: number): [JSBI, JSBI];
export declare function existSarContract(chainId: ChainId): boolean;
export declare function waitForTransaction(tx: TransactionResponse, confirmations?: number, timeout?: number): Promise<void>;
export declare function getBuyUrl(token: Token, chainId?: ChainId): string;
export declare function scrollElementIntoView(element: HTMLElement | null, behavior?: 'smooth' | 'auto'): void;
export declare function isEvmChain(chainId?: ChainId): boolean;
export declare function decimalToFraction(number: number): Fraction;
