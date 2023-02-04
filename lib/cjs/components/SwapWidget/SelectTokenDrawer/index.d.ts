import { Currency } from '@_arcanumdex/sdk';
import React from 'react';
interface Props {
    isOpen: boolean;
    onClose: () => void;
    onCurrencySelect: (currency: Currency) => void;
    selectedCurrency?: Currency;
    otherSelectedCurrency?: Currency;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
