import { Currency } from '@pangolindex/sdk';
declare enum Fields {
    TOKEN0 = 0,
    TOKEN1 = 1
}
interface ClaimProps {
    onClose: () => void;
    currency0?: Currency;
    currency1?: Currency;
    openTokenDrawer: () => void;
    setActiveField: (params: Fields) => void;
    onManagePoolsClick: () => void;
}
declare const PoolImport: ({ currency0, currency1, openTokenDrawer, setActiveField, onManagePoolsClick }: ClaimProps) => JSX.Element;
export default PoolImport;
