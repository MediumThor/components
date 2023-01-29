import { SerializedPair, SerializedToken } from './actions';
export interface UserState {
    userSlippageTolerance: number;
    timestamp: number;
    userExpertMode: boolean;
    userDeadline: string;
    tokens: {
        [chainId: number]: {
            [address: string]: SerializedToken;
        };
    };
    pairs: {
        [chainId: number]: {
            [key: string]: SerializedPair;
        };
    };
}
export declare const initialState: UserState;
declare const _default: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<UserState>;
export default _default;
