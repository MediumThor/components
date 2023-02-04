import { Pair } from '@_arcanumdex/sdk';
import React from 'react';
interface Props {
    isOpen: boolean;
    onClose: () => void;
    onPoolSelect: (pair: Pair) => void;
    selectedPair?: Pair | null;
}
declare const SelectPoolDrawer: React.FC<Props>;
export default SelectPoolDrawer;
