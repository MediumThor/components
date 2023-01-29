export interface SerializedToken {
    chainId: number;
    address: string;
    decimals: number;
    symbol?: string;
    name?: string;
}
export interface SerializedPair {
    token0: SerializedToken;
    token1: SerializedToken;
}
export declare const updateUserSlippageTolerance: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    userSlippageTolerance: number;
}, string>;
export declare const updateUserExpertMode: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    userExpertMode: boolean;
}, string>;
export declare const updateUserDeadline: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    userDeadline: string;
}, string>;
export declare const addSerializedToken: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    serializedToken: SerializedToken;
}, string>;
export declare const removeSerializedToken: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    chainId: number;
    address: string;
}, string>;
export declare const addSerializedPair: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    serializedPair: SerializedPair;
}, string>;
