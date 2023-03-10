import { TokenList } from '@pangolindex/token-lists';
/**
 * Contains the logic for resolving a list URL to a validated token list
 * @param listUrl list url
 * @param resolveENSContentHash resolves an ens name to a contenthash
 */
export default function getTokenList(listUrl: string, resolveENSContentHash: (ensName: string) => Promise<string>): Promise<TokenList>;
