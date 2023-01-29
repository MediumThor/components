import { PangoChefInfo } from 'src/state/ppangoChef/types';
export interface EarnDetailProps {
    stakingInfo: PangoChefInfo;
    version: number;
}
declare const EarnedDetailV3: ({ stakingInfo, version }: EarnDetailProps) => JSX.Element;
export default EarnedDetailV3;
