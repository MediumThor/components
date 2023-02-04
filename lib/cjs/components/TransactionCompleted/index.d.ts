/// <reference types="react" />
export interface TransactionCompletedProps {
    onClose?: () => void;
    submitText?: string;
    showCloseIcon?: boolean;
    isShowButtton?: boolean;
    onButtonClick?: () => void;
    buttonText?: string;
}
declare const TransactionCompleted: ({ onClose, submitText, showCloseIcon, isShowButtton, onButtonClick, buttonText, }: TransactionCompletedProps) => JSX.Element;
export default TransactionCompleted;
