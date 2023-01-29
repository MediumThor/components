import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onDismiss: () => void;
    children?: React.ReactNode;
    overlayBG?: string;
    closeOnClickOutside?: boolean;
}
export default function Modal({ isOpen, onDismiss, children, overlayBG, closeOnClickOutside }: ModalProps): JSX.Element;
export {};
