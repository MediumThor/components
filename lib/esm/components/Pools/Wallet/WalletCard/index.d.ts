import { Pair } from '@arcanumdex/sdk';
export interface WalletCardProps {
    pair: Pair;
}
declare const WalletCard: ({ pair }: WalletCardProps) => JSX.Element;
export default WalletCard;
