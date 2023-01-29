import { JSBI, Token, TokenAmount } from '@arcanumdex/sdk';
export declare enum SpaceType {
    card = "card",
    detail = "detail"
}
export declare enum PoolType {
    own = "own",
    all = "all",
    superFarms = "superFarms"
}
export interface StakingInfoBase {
    stakingRewardAddress: string;
    stakedAmount: TokenAmount;
    earnedAmount: TokenAmount;
    totalStakedAmount: TokenAmount;
    totalRewardRatePerSecond: TokenAmount;
    totalRewardRatePerWeek: TokenAmount;
    rewardRatePerWeek: TokenAmount;
    periodFinish: Date | undefined;
    isPeriodFinished: boolean;
    getHypotheticalWeeklyRewardRate: (stakedAmount: TokenAmount, totalStakedAmount: TokenAmount, totalRewardRatePerSecond: TokenAmount) => TokenAmount;
}
export interface SingleSideStakingInfo extends StakingInfoBase {
    rewardToken: Token;
    totalStakedInPng: TokenAmount;
    apr: JSBI;
}
export interface DoubleSideStakingInfo extends StakingInfoBase {
    tokens: [Token, Token];
    multiplier: JSBI;
    totalStakedInWavax: TokenAmount;
    totalStakedInUsd: TokenAmount;
    rewardTokensAddress?: Array<string>;
    rewardsAddress?: string;
    rewardTokensMultiplier?: Array<JSBI>;
    getExtraTokensWeeklyRewardRate?: (rewardRatePerWeek: TokenAmount, token: Token, tokenMultiplier: JSBI | undefined) => TokenAmount;
}
export interface StakingInfo extends DoubleSideStakingInfo {
    swapFeeApr?: number;
    stakingApr?: number;
    combinedApr?: number;
    rewardTokens?: Array<Token>;
    pid?: string;
}
export interface MinichefStakingInfo {
    stakingRewardAddress: string;
    stakedAmount: TokenAmount;
    earnedAmount: TokenAmount;
    totalStakedAmount: TokenAmount;
    swapFeeApr?: number;
    stakingApr?: number;
    combinedApr?: number;
    tokens: [Token, Token];
    multiplier: JSBI;
    totalStakedInUsd: TokenAmount;
    isPeriodFinished: boolean;
    rewardTokens?: Array<Token>;
    rewardsAddress?: string;
    pid: string;
    totalStakedInWavax: TokenAmount;
    rewardTokensAddress?: Array<string>;
    rewardTokensMultiplier?: Array<JSBI>;
    getExtraTokensWeeklyRewardRate?: (rewardRatePerWeek: TokenAmount, token: Token, tokenMultiplier: JSBI | undefined) => TokenAmount;
    totalRewardRatePerSecond: TokenAmount;
    totalRewardRatePerWeek: TokenAmount;
    rewardRatePerWeek: TokenAmount;
    periodFinish: Date | undefined;
    getHypotheticalWeeklyRewardRate: (stakedAmount: TokenAmount, totalStakedAmount: TokenAmount, totalRewardRatePerSecond: TokenAmount) => TokenAmount;
}
export interface DoubleSideStaking {
    tokens: [Token, Token];
    stakingRewardAddress: string;
    version: number;
    multiplier?: number;
}
export interface MinichefToken {
    id: string;
    symbol: string;
    derivedUSD: number;
    name: string;
    decimals: number;
}
export interface MinichefPair {
    id: string;
    reserve0: number;
    reserve1: number;
    totalSupply: number;
    token0: MinichefToken;
    token1: MinichefToken;
}
export interface MinichefFarmReward {
    id: string;
    token: MinichefToken;
    multiplier: number;
}
export interface MinichefFarmRewarder {
    id: string;
    rewards: Array<MinichefFarmReward>;
}
export interface FarmingPositions {
    id: string;
    stakedTokenBalance: number;
}
export interface MinichefFarm {
    id: string;
    pid: string;
    tvl: number;
    allocPoint: number;
    rewarderAddress: string;
    chefAddress: string;
    pairAddress: string;
    rewarder: MinichefFarmRewarder;
    pair: MinichefPair;
    farmingPositions: FarmingPositions[];
    earnedAmount?: number;
    swapFeeApr?: number;
    stakingApr?: number;
    combinedApr?: number;
}
export interface MinichefV2 {
    id: string;
    totalAllocPoint: number;
    rewardPerSecond: number;
    rewardsExpiration: number;
    farms: Array<MinichefFarm>;
}
