import React, { HTMLProps } from 'react';
import { DefaultTheme } from 'styled-components';
import { Colors } from './styled';
export type ThemeColorsType = NestedObjectDotNotation<Colors>;
export declare const MEDIA_WIDTHS: {
    upToExtraSmall: number;
    upToSmall: number;
    upToMedium: number;
    upToLarge: number;
};
export declare const defaultColors: Colors;
export declare const defaultTheme: DefaultTheme;
type ThemeProviderProps = {
    children: React.ReactNode;
    theme: Partial<DefaultTheme>;
};
export default function ThemeProvider({ children, theme }: ThemeProviderProps): JSX.Element;
export declare const useTheme: () => DefaultTheme;
/**
 * Outbound link that handles firing google analytics events
 */
export declare function ExternalLink({ target, href, rel, ...rest }: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & {
    href: string;
}): JSX.Element;
export {};
