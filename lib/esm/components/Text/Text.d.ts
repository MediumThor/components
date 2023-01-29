import { PositionProps, SpaceProps, TypographyProps } from 'styled-system';
import { ThemeColorsType } from 'src/theme';
export interface TextProps {
    color?: ThemeColorsType;
    cursor?: string;
}
declare const Text: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TextProps & TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>, never>;
export default Text;
