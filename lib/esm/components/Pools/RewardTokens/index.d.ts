import { Token } from '@pangolindex/sdk';
import { LogoSize } from 'src/constants';
interface RewardTokensLogoProps {
    margin?: boolean;
    size?: LogoSize;
    rewardTokens?: Array<Token | null | undefined> | null;
}
export default function RewardTokens({ rewardTokens, size, margin }: RewardTokensLogoProps): JSX.Element;
export {};
