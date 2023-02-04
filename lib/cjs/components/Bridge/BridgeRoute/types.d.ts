import { BridgePrioritizations } from '..';
export declare type Step = {
    contractType?: string;
    subSteps?: string[];
};
export declare type BridgeRouteProps = {
    steps: Step[];
    transactionType: BridgePrioritizations;
    selected: boolean;
    estimatedToken: string;
    estimatedResult: string;
    min: string;
    gasCost: string;
};
