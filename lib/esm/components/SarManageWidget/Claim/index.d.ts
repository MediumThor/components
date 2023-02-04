/// <reference types="react" />
import { Position } from 'src/state/psarstake/hooks';
import { Options } from '../types';
interface Props {
    selectedOption: Options;
    selectedPosition: Position | null;
    onChange: (value: Options) => void;
}
export default function Claim({ selectedOption, selectedPosition, onChange }: Props): JSX.Element;
export {};
