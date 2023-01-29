import { Token } from '@pangolindex/sdk';
export default function TokenWarningModal({ isOpen, tokens, onConfirm, }: {
    isOpen: boolean;
    tokens: Token[];
    onConfirm: () => void;
}): JSX.Element;
