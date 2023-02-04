import { Token } from '@_arcanumdex/sdk';
import React from 'react';
declare type Props = {
    currency: Token;
    onSelect: (address: string) => void;
    style: any;
};
declare const WatchlistCurrencyRow: React.FC<Props>;
export default WatchlistCurrencyRow;
