import { Currency } from '@pangolindex/sdk';
interface RemoveLiquidityProps {
    currencyA?: Currency;
    currencyB?: Currency;
    onLoadingOrComplete?: (value: boolean) => void;
}
declare const RemoveLiquidity: ({ currencyA, currencyB, onLoadingOrComplete }: RemoveLiquidityProps) => JSX.Element;
export default RemoveLiquidity;
