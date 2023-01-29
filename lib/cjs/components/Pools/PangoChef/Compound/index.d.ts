import { PangoChefInfo } from 'src/state/ppangoChef/types';
export interface CompoundProps {
    stakingInfo: PangoChefInfo;
    onClose: () => void;
}
declare const CompoundV3: ({ stakingInfo, onClose }: CompoundProps) => JSX.Element;
export default CompoundV3;
