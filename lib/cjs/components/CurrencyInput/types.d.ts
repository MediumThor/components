import { Currency, Pair } from '@_arcanumdex/sdk';
import { ButtonStyleProps } from '../Button/types';
import { TextInputProps } from '../TextInput/types';
export declare type CurrencyInputProps = TextInputProps & {
    currency?: Currency | null;
    pair?: Pair | null;
    isShowTextInput?: boolean;
    buttonStyle?: ButtonStyleProps;
    onTokenClick?: () => void;
};
