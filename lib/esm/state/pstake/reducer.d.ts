import { ChainId } from '@pangolindex/sdk';
import { MinichefV2 } from './types';
export interface Apr {
    pid: string;
    swapFeeApr: number;
    stakingApr: number;
    combinedApr: number;
}
type MinichefStakingData = {
    [chainId in ChainId]: MinichefV2;
};
type Aprs = {
    [chainId in ChainId]: {
        [key: string]: Apr;
    };
};
type EarnerdAmounts = {
    [chainId in ChainId]: {
        [key: string]: {
            pid: string;
            earnedAmount: number;
        };
    };
};
export interface MinichefStakingInfoState {
    readonly minichefStakingData: MinichefStakingData;
    readonly aprs: Aprs;
    readonly earnedAmounts: EarnerdAmounts;
}
export declare enum SortingType {
    totalStakedInUsd = "totalStakedInUsd",
    totalApr = "totalApr"
}
declare const _default: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<MinichefStakingInfoState>;
export default _default;
