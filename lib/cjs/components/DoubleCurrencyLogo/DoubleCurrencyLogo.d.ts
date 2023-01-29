import { Currency } from '@pangolindex/sdk';
import { LogoSize } from 'src/constants';
export interface DoubleCurrencyLogoProps {
    margin?: boolean;
    size?: LogoSize;
    currency0?: Currency;
    currency1?: Currency;
}
declare const DoubleCurrencyLogo: ({ currency0, currency1, size, margin }: DoubleCurrencyLogoProps) => JSX.Element;
export default DoubleCurrencyLogo;
