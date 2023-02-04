import React from 'react';
import { PairDataUser, TokenDataUser } from 'src/state/pportfolio/hooks';
declare type Props = {
    coin?: TokenDataUser;
    pair?: PairDataUser;
    showBalances: boolean;
};
declare const PortfolioRow: React.FC<Props>;
export default PortfolioRow;
