import { AbstractConnector } from '@web3-react/abstract-connector';
import { AbstractConnectorArguments } from '@web3-react/types';
import { WalletConnection } from 'near-api-js';
export interface NearConfigType {
    networkId: string;
    nodeUrl: string;
    walletUrl: string;
    helperUrl: string;
    explorerUrl: string;
    chainId: number;
    contractId: string;
}
export declare class NearConnector extends AbstractConnector {
    private near;
    wallet: WalletConnection;
    private provider;
    private normalizeChainId;
    private normalizeAccount;
    private chainId;
    constructor(kwargs: AbstractConnectorArguments & {
        normalizeChainId: boolean;
        normalizeAccount: boolean;
        config: NearConfigType;
    });
    private handleChainChanged;
    private handleAccountsChanged;
    private handleClose;
    private handleNetworkChanged;
    getChainId(): Promise<number | string | any>;
    getProvider(): Promise<any>;
    activate(): Promise<any>;
    getAccount(): Promise<null | string>;
    deactivate(): Promise<null>;
    close(): Promise<void>;
    getAccountBalance(): Promise<import("near-api-js/lib/account").AccountBalance | undefined>;
    isAuthorized(): Promise<boolean>;
}
