import { WsProvider } from "@polkadot/api";
import { LendingPoolsResponse } from "../types";

export const getLendingPool = ({ provider }: { provider: WsProvider }) => {
  return provider.send<LendingPoolsResponse>("getLendingPools", []);
};
