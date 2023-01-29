import React from 'react';
export declare const PANGOLIN_PERSISTED_KEYS: string[];
export declare const pangolinReducers: {
    papplication: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./papplication/reducer").ApplicationState>;
    ptransactions: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./ptransactions/reducer").TransactionState>;
    pswap: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./pswap/reducer").SwapState>;
    plists: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./plists/reducer").ListsState>;
    pmulticall: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./pmulticall/reducer").MulticallState>;
    puser: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./puser/reducer").UserState>;
    pwatchlists: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./pwatchlists/reducer").WatchlistState>;
    ptoken: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./ptoken/reducer").TokenChartState>;
    pstake: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./pstake/reducer").MinichefStakingInfoState>;
    pmint: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./pmint/reducer").MintState>;
    pburn: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./pburn/reducer").BurnState>;
};
declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    papplication: import("./papplication/reducer").ApplicationState;
    ptransactions: import("./ptransactions/reducer").TransactionState;
    pswap: import("./pswap/reducer").SwapState;
    plists: import("./plists/reducer").ListsState;
    pmulticall: import("./pmulticall/reducer").MulticallState;
    puser: import("./puser/reducer").UserState;
    pwatchlists: import("./pwatchlists/reducer").WatchlistState;
    ptoken: import("./ptoken/reducer").TokenChartState;
    pstake: import("./pstake/reducer").MinichefStakingInfoState;
    pmint: import("./pmint/reducer").MintState;
    pburn: import("./pburn/reducer").BurnState;
}, import("redux").AnyAction, import("redux").Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>>[]>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export declare const StoreContext: React.Context<any>;
export declare const useStore: () => import("redux").Store<any, import("redux").AnyAction>;
export declare const useDispatch: () => AppDispatch;
export declare const useSelector: <Selected extends unknown>(selector: (state: any) => Selected, equalityFn?: ((previous: Selected, next: Selected) => boolean) | undefined) => Selected;
export default store;
/**
 * create separate galeto store
 */
export declare const galetoStore: import("@reduxjs/toolkit").EnhancedStore<{
    gapplication: import("@gelatonetwork/limit-orders-react/dist/state/gapplication/reducer").ApplicationState;
    guser: import("@gelatonetwork/limit-orders-react/dist/state/guser/reducer").UserState;
    gorder: import("@gelatonetwork/limit-orders-react/dist/state/gorder/reducer").OrderState;
    gmulticall: import("@gelatonetwork/limit-orders-react/dist/state/gmulticall/reducer").MulticallState;
    glists: import("@gelatonetwork/limit-orders-react/dist/state/glists/reducer").ListsState;
    gtransactions: import("@gelatonetwork/limit-orders-react/dist/state/gtransactions/reducer").TransactionState;
}, import("redux").AnyAction, import("redux").Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>>[]>;
