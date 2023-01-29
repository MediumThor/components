import React from 'react';
interface Props {
    type: string;
    setType: (value: string) => void;
}
export declare enum TradeType {
    Pool = "Pool",
    Farm = "Farm"
}
declare const TradeOption: React.FC<Props>;
export default TradeOption;
