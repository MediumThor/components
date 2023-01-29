import { Token } from '@arcanumdex/sdk';
import React from 'react';
type Props = {
    coin: Token;
    visibleTradeButton?: boolean | undefined;
    tradeLinkUrl?: string | undefined;
    redirect?: boolean | undefined;
};
declare const CoinChart: React.FC<Props>;
export default CoinChart;
