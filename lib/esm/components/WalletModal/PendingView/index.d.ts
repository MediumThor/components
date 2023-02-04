/// <reference types="react" />
import { AbstractConnector } from '@web3-react/abstract-connector';
import { WalletInfo } from 'src/constants';
export default function PendingView({ option, connector, error, setPendingError, tryActivation, }: {
    option?: WalletInfo;
    connector?: AbstractConnector;
    error?: boolean;
    setPendingError: (error: boolean) => void;
    tryActivation: (connector: AbstractConnector, option: WalletInfo) => void;
}): JSX.Element;
