/// <reference types="react" />
import { Token } from '@_arcanumdex/sdk';
export default function TokenWarningModal({ isOpen, tokens, onConfirm, }: {
    isOpen: boolean;
    tokens: Token[];
    onConfirm: () => void;
}): JSX.Element;
