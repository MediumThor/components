import React from 'react';
interface Props {
    setMenu: (value: string) => void;
    activeMenu: string;
    menuItems: Array<{
        label: string;
        value: string;
    }>;
}
declare const Wallet: React.FC<Props>;
export default Wallet;
