import React from 'react';
import { MenuPlacement, MultiValue, OptionsOrGroups, SingleValue } from 'react-select';
export interface DropdownMenuProps {
    defaultValue: MultiValue<string> | SingleValue<string>;
    onSelect: (value: MultiValue<string> | string) => void;
    placeHolder?: string;
    isMulti?: boolean;
    menuPlacement?: MenuPlacement;
    options: OptionsOrGroups<any, any>;
    height?: string;
}
declare const DropdownMenu: React.FC<DropdownMenuProps>;
export default DropdownMenu;
