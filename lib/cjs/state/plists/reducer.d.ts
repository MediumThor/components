import { TokenList } from '@arcanumdex/token-lists/dist/types';
export interface ListsState {
    readonly byUrl: {
        readonly [url: string]: {
            readonly current: TokenList | null;
            readonly pendingUpdate: TokenList | null;
            readonly loadingRequestId: string | null;
            readonly error: string | null;
        };
    };
    readonly lastInitializedDefaultListOfLists?: string[];
    readonly selectedListUrl: string[] | undefined;
}
declare const _default: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<ListsState>;
export default _default;
