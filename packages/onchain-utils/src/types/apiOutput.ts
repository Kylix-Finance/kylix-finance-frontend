interface LendingPool {
  id: number;
  asset: string;
  collateral_q: number;
  utilization: number;
  borrow_apy: number;
  supply_apy: number;
  collateral: boolean;
  balance: number;
}

interface LendingPoolsSummary {
  total_supply: number;
  total_borrow: number;
}

type LendingPoolsResponse = [LendingPool[], LendingPoolsSummary];

export type { LendingPoolsResponse, LendingPool };
