import { ChainId, Token } from '@arcanumdex/sdk';
import { Tags, TokenInfo, TokenList } from '@_arcanumdex/token-lists';
type TagDetails = Tags[keyof Tags];
export interface TagInfo extends TagDetails {
    id: string;
}
/**
 * Token instances created from token info.
 */
export declare class WrappedTokenInfo extends Token {
    readonly tokenInfo: TokenInfo;
    readonly tags: TagInfo[];
    constructor(tokenInfo: TokenInfo, tags: TagInfo[]);
    get logoURI(): string | undefined;
}
export type TokenAddressMap = Readonly<{
    [chainId in ChainId]: Readonly<{
        [tokenAddress: string]: WrappedTokenInfo;
    }>;
}>;
export declare function listToTokenMap(list: TokenList): TokenAddressMap;
export declare function useTokenList(urls: string[] | undefined): TokenAddressMap;
export declare function useSelectedListUrl(): string[] | undefined;
export declare function useSelectedTokenList(): TokenAddressMap;
export declare function useSelectedListInfo(): {
    current: TokenList | null;
    pending: TokenList | null;
    loading: boolean;
    multipleSelected: boolean;
    selectedCount: number;
};
export declare function useAllLists(): TokenList[];
export declare function useIsSelectedAEBToken(): boolean;
export { };
