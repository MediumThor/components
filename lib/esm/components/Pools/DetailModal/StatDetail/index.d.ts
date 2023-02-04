/// <reference types="react" />
import { Currency, Pair, TokenAmount } from '@_arcanumdex/sdk';
interface Props {
    title: string;
    totalAmount: string;
    pair: Pair | null;
    arl?: TokenAmount;
    currency0: Currency | undefined;
    currency1: Currency | undefined;
    link?: string;
}
export default function StatDetail({ title, totalAmount, pair, arl, currency0, currency1, link }: Props): JSX.Element;
export {};
