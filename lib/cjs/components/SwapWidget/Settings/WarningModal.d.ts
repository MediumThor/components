interface Props {
    isOpen: boolean;
    close: () => void;
    setExpertMode: (value: boolean) => void;
}
declare const WarningModal: ({ isOpen, close, setExpertMode }: Props) => JSX.Element;
export default WarningModal;
