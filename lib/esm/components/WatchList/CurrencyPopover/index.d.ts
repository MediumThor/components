import { Token } from '@arcanumdex/sdk';
import React from 'react';
interface Props {
    getRef?: (ref: any) => void;
    coins: Array<Token>;
    isOpen: boolean;
    onSelectCurrency: (currency: Token) => void;
}
declare const CurrencyPopover: React.FC<Props>;
export default CurrencyPopover;
