import { Lending } from "./lending";
import { Liquidation } from "./liquidation";
export interface RPC {
  lending: Lending;
  liquidation: Liquidation;
}
