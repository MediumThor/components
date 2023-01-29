import { ComponentStory } from '@storybook/react';
import React from 'react';
import { DropdownMenuProps } from '.';
declare const _default: {
    component: React.FC<DropdownMenuProps>;
    title: string;
    args: {
        activeMenu: string;
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        options: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        menuPlacement: {
            name: string;
            control: string;
            options: string[];
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: string;
            description: string;
        };
        isMulti: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: boolean;
            description: string;
        };
        placeHolder: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: string;
            description: string;
        };
        height: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: string;
            description: string;
        };
        onSelect: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            default: () => void;
            description: string;
        };
        defaultValue: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
    };
};
export default _default;
export declare const Default: ComponentStory<React.FC<DropdownMenuProps>>;
