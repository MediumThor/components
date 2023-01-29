import { Token } from '@arcanumdex/sdk';
export declare enum BridgeState {
    PENDING = "PENDING",
    FAILED = "FAILED",
    SUCCESS = "SUCCESS"
}
export type BridgeTransferProps = {
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
