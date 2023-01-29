import { Currency } from '@arcanumdex/sdk';
export declare enum Fields {
    TOKEN0 = 0,
    TOKEN1 = 1
}
export declare enum BodyState {
    SELECT_TOKENS = 0,
    ADD_LIQUIDITY = 1,
    CREATE_PAIR = 2
}
interface Props {
    currency0?: Currency;
    currency1?: Currency;
    onTokenClick: (field: Fields) => void;
    onClick: (value: number) => void;
}
declare const SearchToken: ({ currency0, currency1, onTokenClick, onClick }: Props) => JSX.Element;
export default SearchToken;
