import { Token } from '@_arcanumdex/sdk';
import React from 'react';
declare type Props = {
    coin: Token;
    onClick: () => void;
    onRemove: () => void;
    isSelected: boolean;
};
declare const WatchlistRow: React.FC<Props>;
export default WatchlistRow;
