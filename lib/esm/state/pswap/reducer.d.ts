import { FeeInfo, Field } from './actions';
export interface SwapState extends SwapParams {
    readonly feeTo: string;
    readonly feeInfo: FeeInfo;
}
export interface SwapParams {
    readonly independentField: Field;
    readonly typedValue: string;
    readonly [Field.INPUT]: {
        readonly currencyId: string | undefined;
    };
    readonly [Field.OUTPUT]: {
        readonly currencyId: string | undefined;
    };
    readonly recipient: string | null;
}
declare const _default: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<SwapState>;
export default _default;
