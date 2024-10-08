import { LendingPoolsResponse } from "./apiOutput";
import { MethodsName } from "./methods";
interface IO<P, O> {
  params: P;
  output: O;
}

interface GetLendingPools extends IO<[], LendingPoolsResponse> {}

export type IOCollection = {
  getLendingPools: GetLendingPools;
  getLending: GetLendingPools;
};
