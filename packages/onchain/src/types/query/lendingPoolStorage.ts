export interface LendingLendingPool {
  id: number;
  lendTokenId: number;
  reserveBalance: string;
  borrowedBalance: string;
  activated: boolean;
  interestModel: {
    y0: string;
    y1: string;
    xm: string;
    ym: string;
  };
  reserveFactor: number;
  exchangeRate: number;
  collateralFactor: number;
  liquidationThreshold: number;
  borrowRate: number;
  supplyRate: number;
  lastAccruedInterestAt: string;
  borrowIndex: string;
  supplyIndex: string;
  liquidation: {
    totalCollateral: string;
    totalDebt: string;
  };
}
