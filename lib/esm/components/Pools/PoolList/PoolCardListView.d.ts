import React from 'react';
import { StakingInfo } from 'src/state/pstake/types';
export declare enum SortingType {
    totalStakedInUsd = "totalStakedInUsd",
    totalApr = "totalApr"
}
export declare const SortOptions: {
    label: string;
    value: SortingType;
}[];
export interface PoolCardListViewProps {
    version: string;
    setMenu: (value: string) => void;
    activeMenu: string;
    menuItems: Array<{
        label: string;
        value: string;
    }>;
    handleSearch: (value: any) => void;
    onChangeSortBy: (value: string) => void;
    sortBy: string;
    searchQuery: string;
    isLoading: boolean;
    doesNotPoolExist: boolean;
    children: React.ReactNode;
    selectedPool: StakingInfo;
}
declare const PoolCardListView: ({ version, setMenu, activeMenu, menuItems, handleSearch, sortBy, searchQuery, onChangeSortBy, isLoading, doesNotPoolExist, children, selectedPool, }: PoolCardListViewProps) => JSX.Element;
export default PoolCardListView;
