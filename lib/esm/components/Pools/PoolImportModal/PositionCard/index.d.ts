/// <reference types="react" />
import { Pair } from '@_arcanumdex/sdk';
export interface PositionCardProps {
    pair: Pair;
    onManagePoolsClick: () => void;
}
declare const PositionCard: ({ pair, onManagePoolsClick }: PositionCardProps) => JSX.Element;
export default PositionCard;
