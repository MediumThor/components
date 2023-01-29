import { AbstractConnector } from '@web3-react/abstract-connector';
import { ConnectorUpdate } from '@web3-react/types';
interface NetworkConnectorArguments {
    urls: {
        [chainId: number]: string;
    };
    defaultChainId?: number;
}
type AsyncSendable = {
    isMetaMask?: boolean;
    isXDEFI?: boolean;
    host?: string;
    path?: string;
    sendAsync?: (request: any, callback: (error: any, response: any) => void) => void;
    send?: (request: any, callback: (error: any, response: any) => void) => void;
};
declare class MiniRpcProvider implements AsyncSendable {
    readonly isMetaMask: false;
    readonly isXDEFI: false;
    readonly chainId: number;
    readonly url: string;
    readonly host: string;
    readonly path: string;
    readonly batchWaitTimeMs: number;
    private nextId;
    private batchTimeoutId;
    private batch;
    constructor(chainId: number, url: string, batchWaitTimeMs?: number);
    readonly clearBatch: () => Promise<void>;
    readonly sendAsync: (request: {
        jsonrpc: '2.0';
        id: number | string | null;
        method: string;
        params?: unknown[] | object;
    }, callback: (error: any, response: any) => void) => void;
    readonly request: (method: string | {
        method: string;
        params: unknown[];
    }, params?: unknown[] | object) => Promise<unknown>;
}
export declare class NetworkConnector extends AbstractConnector {
    private readonly providers;
    private currentChainId;
    constructor({ urls, defaultChainId }: NetworkConnectorArguments);
    get provider(): MiniRpcProvider;
    activate(): Promise<ConnectorUpdate>;
    getProvider(): Promise<MiniRpcProvider>;
    getChainId(): Promise<number>;
    getAccount(): Promise<null>;
    deactivate(): void;
}
export {};
