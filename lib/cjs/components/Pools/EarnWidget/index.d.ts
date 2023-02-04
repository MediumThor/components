/// <reference types="react" />
import { Currency } from '@_arcanumdex/sdk';
import { StakingInfo } from 'src/state/pstake/types';
interface EarnWidgetProps {
    currencyA: Currency;
    currencyB: Currency;
    version: number;
    stakingInfo: StakingInfo;
}
declare const EarnWidget: ({ currencyA, currencyB, version, stakingInfo }: EarnWidgetProps) => JSX.Element;
export default EarnWidget;
