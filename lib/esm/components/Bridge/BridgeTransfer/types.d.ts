import { Token } from '@_arcanumdex/sdk';
export declare enum BridgeState {
    PENDING = "PENDING",
    FAILED = "FAILED",
    SUCCESS = "SUCCESS"
}
export declare type BridgeTransferProps = {
    onDelete?: () => void;
    onResume?: () => void;
    date: string;
    from: string;
    fromChain: Token;
    fromCoin: Token;
    to: string;
    toChain: Token;
    toCoin: Token;
    via: string;
    state: BridgeState;
};
