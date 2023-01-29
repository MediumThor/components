import { ChainId } from '@arcanumdex/sdk';
import { MinichefV2 } from './types';
export declare const updateMinichefStakingAllData: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    data: {
        chainId: ChainId;
        data: MinichefV2;
    };
}, string>;
export declare const updateMinichefStakingAllAprs: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    data: {
        chainId: ChainId;
        data: any;
    };
}, string>;
export declare const updateMinichefStakingAllFarmsEarnedAmount: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    data: {
        chainId: ChainId;
        data: any;
    };
}, string>;
