import { TokenList } from '@arcanumdex/token-lists';
export type PopupContent = {
    txn: {
        hash: string;
        success: boolean;
        summary?: string;
    };
} | {
    listUpdate: {
        listUrl: string;
        oldList: TokenList;
        newList: TokenList;
        auto: boolean;
    };
};
export declare enum ApplicationModal {
    WALLET = 0,
    POOL_DETAIL = 1
}
export declare const updateBlockNumber: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    chainId: number;
    blockNumber: number;
}, string>;
export declare const setOpenModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<ApplicationModal | null, string>;
export declare const addPopup: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    key?: string | undefined;
    removeAfterMs?: number | null | undefined;
    content: PopupContent;
}, string>;
export declare const removePopup: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    key: string;
}, string>;
