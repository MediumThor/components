export interface WeeklyState {
    [address: string]: Array<{
        priceUSD: number;
        date: string;
    }>;
}
export interface ChartState {
    [address: string]: Array<{
        priceUSD: number;
        timestamp: string;
    }>;
}
export interface TokenChartState {
    readonly weekly: WeeklyState;
    readonly tokenPrices: ChartState;
}
declare const _default: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<TokenChartState>;
export default _default;
