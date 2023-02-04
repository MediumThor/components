/// <reference types="react" />
import { Position } from 'src/state/psarstake/hooks';
interface Props {
    positions: Position[];
    onSelectPosition: (position: Position | null) => void;
}
export default function Portfolio({ positions, onSelectPosition }: Props): JSX.Element;
export {};
