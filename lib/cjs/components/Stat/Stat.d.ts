import { Currency } from '@_arcanumdex/sdk';
import React from 'react';
import { ThemeColorsType } from 'src/theme';
export interface StatProps {
    title?: React.ReactNode;
    titlePosition?: 'top' | 'bottom';
    stat?: any;
    titleColor?: ThemeColorsType;
    statColor?: ThemeColorsType;
    titleFontSize?: number | number[];
    statFontSize?: number | number[];
    currency?: Currency;
    statAlign?: 'center' | 'right' | 'left';
    showAnalytics?: boolean;
}
declare const Stat: ({ title, titlePosition, stat, titleColor, titleFontSize, statColor, statFontSize, currency, statAlign, showAnalytics, }: StatProps) => JSX.Element;
export default Stat;
