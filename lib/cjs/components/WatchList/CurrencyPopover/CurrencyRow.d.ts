import { Token } from '@arcanumdex/sdk';
import React from 'react';
type Props = {
    currency: Token;
    onSelect: (address: string) => void;
    style: any;
};
declare const WatchlistCurrencyRow: React.FC<Props>;
export default WatchlistCurrencyRow;
