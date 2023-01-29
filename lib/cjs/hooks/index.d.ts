import { Web3Provider as Web3ProviderEthers } from '@ethersproject/providers';
import { ChainId } from '@pangolindex/sdk';
import React from 'react';
import type { FC, ReactNode } from 'react';
interface Web3State {
    library: Web3ProviderEthers | undefined;
    account: string | undefined | null;
    chainId: number | undefined;
}
interface Web3ProviderProps {
    children: ReactNode;
    library: Web3ProviderEthers | undefined;
    account: string | undefined | null;
    chainId: number | undefined;
}
declare const Web3Context: React.Context<Web3State>;
export declare const usePangolinWeb3: () => Web3State;
export declare const PangolinWeb3Provider: FC<Web3ProviderProps>;
export default Web3Context;
export declare const useChainId: () => ChainId;
export declare function useLibrary(): {
    library: any;
    provider: any;
};
export declare const useRefetchMinichefSubgraph: () => () => Promise<void>;
export declare function useGetBlockTimestamp(blockNumber?: number): string | undefined;
