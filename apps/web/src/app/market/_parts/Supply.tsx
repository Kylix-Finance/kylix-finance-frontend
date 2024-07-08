import { Icons } from "~/assets/svgs";
import { Card } from "~/components";

const Supply = () => {
  return (
    <Card
      title="Total Supply"
      icon={Icons.WalletFill}
      rightComponent={
        <p className="text-primary-800 font-bold text-xl leading-7">
          $ 2,100,140
        </p>
      }
    >
      <p className="flex items-center text-primary-800/50 text-xs">
        <span>Suppliers: </span>
        <span>1,200</span>
      </p>
    </Card>
  );
};

export default Supply;
