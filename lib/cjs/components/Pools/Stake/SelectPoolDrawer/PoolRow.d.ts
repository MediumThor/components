import { Pair } from '@_arcanumdex/sdk';
import React from 'react';
interface Props {
    pair: Pair;
    style: any;
    onSelect: (pair: Pair) => void;
    isSelected: boolean;
}
declare const PoolRow: React.FC<Props>;
export default PoolRow;
