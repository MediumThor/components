import { Currency, Pair } from '@arcanumdex/sdk';
import * as React from 'react';
import { ButtonStyleProps } from '../Button/types';
import { TextInputProps } from '../TextInput/types';
export type CurrencyInputProps = TextInputProps & {
  currency?: Currency | null;
  pair?: Pair | null;
  isShowTextInput?: boolean;
  buttonStyle?: ButtonStyleProps;
  onTokenClick?: () => void;
};
