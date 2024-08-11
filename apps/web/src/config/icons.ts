import { Icon } from "~/types";
import { Coins } from "~/assets/svgs";
import Wbtc from "cryptocurrency-icons/svg/icon/wbtc.svg";
import Weth from "cryptocurrency-icons/svg/icon/eth.svg";
import Usdc from "cryptocurrency-icons/svg/icon/usdc.svg";
import Usdt from "cryptocurrency-icons/svg/icon/usdt.svg";
export const TokenIcons: Record<string, Icon> = {
  BTC: Coins.BitCoin,
  DOT: Coins.Dot,
  Ankr: Coins.Ankr,
  Aave: Coins.Aave,
  WBTC: Wbtc,
  WETH: Weth,
  USDT: Usdt,
  USDC: Usdc,
};
