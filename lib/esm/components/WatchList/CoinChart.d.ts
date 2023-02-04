import { Token } from '@_arcanumdex/sdk';
import React from 'react';
declare type Props = {
    coin: Token;
    visibleTradeButton?: boolean | undefined;
    tradeLinkUrl?: string | undefined;
    redirect?: boolean | undefined;
};
declare const CoinChart: React.FC<Props>;
export default CoinChart;
