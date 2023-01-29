import { StakingInfo } from 'src/state/pstake/types';
export interface DetailModalProps {
    stakingInfo: StakingInfo;
    version: number;
}
declare const DetailModal: ({ stakingInfo, version }: DetailModalProps) => JSX.Element;
export default DetailModal;
