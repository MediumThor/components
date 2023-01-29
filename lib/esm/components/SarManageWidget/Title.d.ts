import { Position } from 'src/state/psarstake/hooks';
import { Options } from './types';
interface Props {
    selectPosition: Position | null;
    selectedOption: Options;
    onChange: (value: Options) => void;
}
export default function Title({ selectPosition, selectedOption, onChange }: Props): JSX.Element;
export {};
