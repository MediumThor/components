import { Currency } from '@arcanumdex/sdk';
import React from 'react';
import { LogoSize } from 'src/constants';
export default function CurrencyLogo({ currency, size, style, imageSize, }: {
    currency?: Currency;
    size?: LogoSize;
    style?: React.CSSProperties;
    imageSize?: LogoSize;
}): JSX.Element;
