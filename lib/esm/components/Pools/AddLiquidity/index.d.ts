import { Currency } from '@arcanumdex/sdk';
import { SpaceType } from 'src/state/pstake/types';
interface AddLiquidityProps {
    currencyA: Currency;
    currencyB: Currency;
    onComplete?: () => void;
    onAddToFarm?: () => void;
    type: SpaceType.card | SpaceType.detail;
}
declare const AddLiquidity: ({ currencyA, currencyB, onComplete, onAddToFarm, type }: AddLiquidityProps) => JSX.Element;
export default AddLiquidity;
