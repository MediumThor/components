import { ChartState, WeeklyState } from './reducer';
export declare function useAllTokenWeeklyPriceChartData(): WeeklyState | undefined;
export declare function useAllTokenPricesChartData(): ChartState | undefined;
export declare function useTokenWeeklyChartData(tokenAddress: string): {
    priceUSD: number;
    date: string;
}[] | undefined;
export declare function useTokenPriceData(tokenAddress: string, timeWindow: string, interval?: number, type?: string): {
    priceUSD: number;
    timestamp: string;
}[] | undefined;
export declare const getIntervalTokenData: (tokenAddress: string, startTime: number, to?: number, interval?: number) => Promise<{
    timestamp: string;
    priceUSD: number;
}[]>;
export interface Category {
    timestamp?: string;
    number?: any;
}
export declare function getBlocksFromTimestamps(timestamps: Array<number>, skipCount?: number): Promise<Category[]>;
