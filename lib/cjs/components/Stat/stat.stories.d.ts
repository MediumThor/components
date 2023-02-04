/// <reference types="react" />
import { ComponentStory } from '@storybook/react';
declare const _default: {
    component: ({ title, titlePosition, stat, titleColor, titleFontSize, statColor, statFontSize, currency, statAlign, showAnalytics, }: import("./Stat").StatProps) => JSX.Element;
    title: string;
};
export default _default;
export declare const Simple: ComponentStory<({ title, titlePosition, stat, titleColor, titleFontSize, statColor, statFontSize, currency, statAlign, showAnalytics, }: import("./Stat").StatProps) => JSX.Element>;
export declare const CurrencyStat: ComponentStory<({ title, titlePosition, stat, titleColor, titleFontSize, statColor, statFontSize, currency, statAlign, showAnalytics, }: import("./Stat").StatProps) => JSX.Element>;
export declare const MultipleCurrencyStat: ComponentStory<({ title, titlePosition, stat, titleColor, titleFontSize, statColor, statFontSize, currency, statAlign, showAnalytics, }: import("./Stat").StatProps) => JSX.Element>;
