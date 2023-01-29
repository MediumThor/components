import { ComponentStory } from '@storybook/react';
import React from 'react';
import { BridgePrioritizations } from '..';
import { BridgeRouteProps } from './types';
declare const _default: {
    component: React.FC<BridgeRouteProps>;
    title: string;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        transactionType: {
            name: string;
            type: {
                name: typeof BridgePrioritizations;
                required: boolean;
            };
            control: {
                type: string;
                labels: {
                    0: string;
                    1: string;
                    2: string;
                };
            };
            options: BridgePrioritizations[];
            description: string;
        };
        estimatedToken: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        estimatedResult: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        min: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        gasCost: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        selected: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: boolean;
            description: string;
        };
        steps: {
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
export declare const Default: ComponentStory<React.FC<BridgeRouteProps>>;
