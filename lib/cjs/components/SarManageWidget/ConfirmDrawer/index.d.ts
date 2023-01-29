import React from 'react';
interface Props {
    isOpen: boolean;
    attemptingTxn: boolean;
    txHash: string | null;
    title?: string;
    errorMessage: string | null;
    pendingMessage: string;
    successMessage: string;
    confirmContent: JSX.Element | null;
    onClose: () => void;
}
declare const ConfirmDrawer: React.FC<Props>;
export default ConfirmDrawer;
