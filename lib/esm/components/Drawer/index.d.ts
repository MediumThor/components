import React from 'react';
interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    title?: string;
    pb?: number;
    backgroundColor?: string;
}
export default function Drawer({ isOpen, onClose, children, title, pb, backgroundColor }: DrawerProps): JSX.Element;
export {};
