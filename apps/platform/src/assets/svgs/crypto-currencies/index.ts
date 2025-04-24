import wbtc from "cryptocurrency-icons/svg/icon/wbtc.svg";
import weth from "cryptocurrency-icons/svg/icon/eth.svg";
import generic from "cryptocurrency-icons/svg/icon/generic.svg";
// import btc from "./bitcoin.svg";
// import dot from "./dot.svg";
// import ankr from "./ankr.svg";
// import aave from "./aave.svg";
// import usdt from "./usdt.svg";
// import solana from "./solana.svg";
// import sui from "./sui.svg";

type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const cryptoCurrencies: Record<string, Icon> = {
  //   btc,
  //   dot,
  //   ankr,
  //   aave,
  wbtc,
  weth,
  //   usdt,
  //   usdc,
  //   solana,
  //   sui,
  generic,
};
