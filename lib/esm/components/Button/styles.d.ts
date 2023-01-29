/// <reference types="react" />
export declare const Root: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("./types").ButtonStyleProps & {
    isDisabled?: boolean | undefined;
    children: import("react").ReactNode;
    type?: "button" | "submit" | undefined;
    variant: "primary" | "secondary" | "outline" | "plain" | "confirm";
    iconBefore?: import("react").ReactNode;
    iconAfter?: import("react").ReactNode;
    onClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    id?: string | undefined;
    loading?: boolean | undefined;
    loadingIcon?: import("react").ReactNode;
    loadingText?: string | undefined;
    as?: string | import("react").ComponentType<any> | undefined;
    href?: string | undefined;
    target?: string | undefined;
}, never>;
export declare const IconAfter: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const IconBefore: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
