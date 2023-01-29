import { PangoChefInfo } from 'src/state/ppangoChef/types';
export interface PoolCardProps {
    stakingInfo: PangoChefInfo;
    onClickViewDetail: () => void;
    version: number;
}
declare const PoolCardV3: ({ stakingInfo, onClickViewDetail, version }: PoolCardProps) => JSX.Element;
export default PoolCardV3;
