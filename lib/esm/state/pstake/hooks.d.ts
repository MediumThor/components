import { CurrencyAmount, JSBI, Pair, Token, TokenAmount } from '@arcanumdex/sdk';
import { Apr } from 'src/state/pstake/reducer';
import { DoubleSideStakingInfo, MinichefStakingInfo, MinichefV2, StakingInfo } from 'src/state/pstake/types';
export declare const useGetFarmApr: (pid: string) => {
    swapFeeApr: number;
    combinedApr: number;
    stakingApr: number;
};
export declare const useGetEarnedAmount: (pid: string) => {
    earnedAmount: any;
};
export declare const useSortFarmAprs: () => Array<Apr>;
interface AprResult {
    swapFeeApr: number;
    stakingApr: number;
    combinedApr: number;
}
export declare const fetchChunkedAprs: (pids: string[], chainId: ChainId, chunkSize?: number) => Promise<AprResult[]>;
export declare const useGetMinichefPids: () => string[];
export declare function useFetchFarmAprs(): void;
export declare function useUpdateAllFarmsEarnAmount(): void;
export declare const sortingOnAvaxStake: (info_a: DoubleSideStakingInfo, info_b: DoubleSideStakingInfo) => 1 | -1;
export declare const sortingOnStakedAmount: (info_a: DoubleSideStakingInfo, info_b: DoubleSideStakingInfo) => 0 | 1 | -1;
export declare const useMinichefPools: () => {
    [key: string]: number;
};
export declare function useMinichefPendingRewards(miniChefStaking: StakingInfo | null): {
    rewardTokensAmount: TokenAmount[];
    rewardTokensMultiplier: any;
};
export declare function useGetPoolDollerWorth(pair: Pair | null): {
    userArl: any;
    liquidityInUSD: number;
};
export declare function useDerivedStakeInfo(typedValue: string, stakingToken: Token, userLiquidityUnstaked: TokenAmount | undefined): {
    parsedAmount?: CurrencyAmount;
    error?: string;
};
export declare function useGetRewardTokens(rewardTokens?: Array<Token>, rewardTokensAddress?: Array<string>): Token[] | undefined;
export declare const calculateTotalStakedAmountInAvax: (amountStaked: JSBI, amountAvailable: JSBI, reserveInWavax: JSBI, chainId: ChainId) => TokenAmount;
export declare const calculateTotalStakedAmountInAvaxFromPng: (amountStaked: JSBI, amountAvailable: JSBI, avaxPngPairReserveOfPng: JSBI, avaxPngPairReserveOfWavax: JSBI, reserveInPng: JSBI, chainId: ChainId) => TokenAmount;
export declare const getExtraTokensWeeklyRewardRate: (rewardRatePerWeek: TokenAmount, token: Token, tokenMultiplier: JSBI | undefined) => any;
export declare const tokenComparator: ({ address: addressA }: {
    address: string;
}, { address: addressB }: {
    address: string;
}) => 0 | 1 | -1;
export declare const useDummyMinichefHook: (_version?: number, _pairToFilterBy?: Pair | null) => StakingInfo[];
export declare const useMinichefStakingInfos: (version?: number, pairToFilterBy?: Pair | null) => StakingInfo[];
export declare const fetchMinichefData: (account: string, chainId: ChainId) => () => Promise<any>;
export declare function useGetAllFarmData(): void;
export declare function useGetDummyAllFarmData(): void;
export declare function useAllMinichefStakingInfoData(): MinichefV2 | undefined;
export declare const useGetMinichefStakingInfosViaSubgraph: () => MinichefStakingInfo[];
export declare const useDummyMinichefStakingInfosViaSubgraph: () => MinichefStakingInfo[];
export {};
