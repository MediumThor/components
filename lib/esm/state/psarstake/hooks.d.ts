/// <reference types="react" />
import { BigNumber } from '@ethersproject/bignumber';
import { Token, TokenAmount } from '@pangolindex/sdk';
export interface URI {
    name: string;
    description: string;
    external_url: string;
    attributes: any[];
    image: string;
}
export interface Position {
    id: BigNumber;
    balance: BigNumber;
    sumOfEntryTimes: BigNumber;
    apr: BigNumber;
    rewardRate: BigNumber;
    pendingRewards: BigNumber;
    uri: URI;
}
export declare function useSarStakeInfo(): {
    apr: BigNumber | null;
    totalStaked: TokenAmount;
    sumOfEntryTimes: BigNumber;
    rewardRate: BigNumber;
    weeklyPNG: BigNumber;
};
export declare function useDerivativeSarStake(positionId?: BigNumber): {
    attempting: boolean;
    typedValue: string;
    parsedAmount: import("@pangolindex/sdk").CurrencyAmount | undefined;
    hash: string | null;
    stepIndex: number;
    dollerWorth: number | undefined;
    error: string | undefined;
    approval: import("src/hooks/useApproveCallback").ApprovalState;
    account: string | null | undefined;
    png: Token;
    stakeError: string | null;
    onAttemptToApprove: () => Promise<void>;
    onUserInput: (_typedValue: string) => void;
    wrappedOnDismiss: () => void;
    handleMax: () => void;
    onStake: () => Promise<void>;
    onChangePercentage: (value: number) => void;
    setStepIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
};
export declare function useDerivativeSarUnstake(position: Position | null): {
    attempting: boolean;
    hash: string | null;
    stepIndex: number;
    typedValue: string;
    parsedAmount: import("@pangolindex/sdk").CurrencyAmount | undefined;
    error: string | undefined;
    unstakeError: string | null;
    onUserInput: (_typedValue: string) => void;
    wrappedOnDismiss: () => void;
    handleMax: () => void;
    onUnstake: () => Promise<void>;
    onChangePercentage: (value: number) => void;
    setStepIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
};
export declare function useDerivativeSarCompound(position: Position | null): {
    attempting: boolean;
    hash: string | null;
    compoundError: string | null;
    wrappedOnDismiss: () => void;
    onCompound: () => Promise<void>;
};
export declare function useDerivativeSarClaim(position: Position | null): {
    attempting: boolean;
    hash: string | null;
    claimError: string | null;
    wrappedOnDismiss: () => void;
    onClaim: () => Promise<void>;
};
export declare function useSarPositions(): {
    positions: Position[];
    isLoading: boolean;
};
