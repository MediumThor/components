import { ComponentStory } from '@storybook/react';
import React from 'react';
import { BridgeState, BridgeTransferProps } from './types';
declare const _default: {
    component: React.FC<BridgeTransferProps>;
    title: string;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        state: {
            name: string;
            control: string;
            options: BridgeState[];
            type: {
                name: typeof BridgeState;
                required: boolean;
            };
            description: string;
        };
        from: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        to: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        date: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        fromChain: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        toChain: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        fromCoin: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        toCoin: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        via: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            description: string;
        };
        onDelete: {
            name: string;
            control: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: () => void;
            description: string;
        };
        onResume: {
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
export declare const Default: ComponentStory<React.FC<BridgeTransferProps>>;
