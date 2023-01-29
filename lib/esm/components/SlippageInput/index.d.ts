import React from 'react';
export interface SlippageInputProps {
    expertMode?: boolean;
    slippageTolerance: string;
    showTitle?: boolean;
    setSlippageTolerance: React.Dispatch<React.SetStateAction<string>>;
}
declare const SlippageInput: React.FC<SlippageInputProps>;
export default SlippageInput;
