import { BigNumber } from '@ethersproject/bignumber';
import { Token } from '@_arcanumdex/sdk';
import { PangoChefInfo } from './types';
export declare function usePangoChefInfos(): PangoChefInfo[];
export declare function useUserPangoChefAPR(stakingInfo?: PangoChefInfo): string;
export declare function useUserPangoChefRewardRate(stakingInfo: PangoChefInfo): BigNumber;
export declare function useIsLockingPoolZero(): [Token, Token][];
