export interface News {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
    chains: string[];
}
export declare function useGetNews(): import("react-query").UseQueryResult<News[], unknown>;
