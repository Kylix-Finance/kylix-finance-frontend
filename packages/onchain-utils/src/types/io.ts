import { LendingPoolsResponse } from "./apiOutput";
interface IO<P, O> {
  params: P;
  output: O;
}

interface GetLendingPools extends IO<[], LendingPoolsResponse> {}

export type IOCollection = {
  getLendingPools: GetLendingPools;
  getLending: GetLendingPools;
};
