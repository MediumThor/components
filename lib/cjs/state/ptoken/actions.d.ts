export declare const updateTokenWeeklyPriceChartData: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    address: string;
    chartData: Array<{
        priceUSD: number;
        date: string;
    }>;
}, string>;
export declare const updateTokenPriceChartData: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    address: string;
    chartData: Array<{
        priceUSD: number;
        timestamp: string;
    }>;
}, string>;
