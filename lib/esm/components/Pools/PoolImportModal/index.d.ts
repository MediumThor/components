export interface ImportPoolModalProps {
    isOpen: boolean;
    onClose: () => void;
    onManagePoolsClick: () => void;
}
declare const PoolImportModal: ({ isOpen, onClose, onManagePoolsClick }: ImportPoolModalProps) => JSX.Element;
export default PoolImportModal;
