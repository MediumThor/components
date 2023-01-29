import { ComponentStory } from '@storybook/react';
import React from 'react';
import { BridgeInputsWidgetProps } from './types';
declare const _default: {
    component: React.FC<BridgeInputsWidgetProps>;
    title: string;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        title: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        inputDisabled: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        isTokenDrawerOpen: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: boolean;
            description: string;
        };
        onTokenDrawerOpen: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: () => void;
            description: string;
        };
    };
};
export default _default;
export declare const Default: ComponentStory<React.FC<BridgeInputsWidgetProps>>;
