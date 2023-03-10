import { ThemeColorsType } from 'src/theme';
export declare type CheckboxProps = {
    name?: string;
    /** id **/
    id?: string;
    /** label **/
    label?: string;
    /** label colour */
    labelColor?: ThemeColorsType;
    /** called when state change **/
    onChange?: (isChecked: boolean, value: any) => void;
    /** disable radio button **/
    disabled?: boolean;
    /** value of radio button **/
    value?: any;
    /** size of radio button **/
    size?: number;
    type?: 'horizontal' | 'verticle';
    checked?: boolean;
};
