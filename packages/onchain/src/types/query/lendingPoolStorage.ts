export interface LendingLendingPool {
  id: number;
  lendTokenId: number;
  reserveBalance: bigint;
  borrowedBalance: bigint;
  activated: boolean;
  interestModel: {
    y0: bigint;
    y1: bigint;
    xm: bigint;
    ym: bigint;
  };
  reserveFactor: number;
  exchangeRate: number;
  collateralFactor: number;
  liquidationThreshold: number;
  borrowRate: number;
  supplyRate: number;
  lastAccruedInterestAt: bigint;
  borrowIndex: bigint;
  supplyIndex: bigint;
  liquidation: {
    totalCollateral: bigint;
    totalDebt: bigint;
  };
}
