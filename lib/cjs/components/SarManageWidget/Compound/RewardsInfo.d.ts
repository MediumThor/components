/// <reference types="react" />
import { Position } from 'src/state/psarstake/hooks';
import { Options } from '../types';
interface Props {
    selectedOption: Options;
    selectedPosition: Position | null;
    pendingRewards: string;
    onChange: (value: Options) => void;
}
export default function RewardsInfo({ selectedOption, selectedPosition, pendingRewards, onChange }: Props): JSX.Element;
export {};
