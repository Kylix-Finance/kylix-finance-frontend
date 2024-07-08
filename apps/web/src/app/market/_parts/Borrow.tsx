import { Icons } from "~/assets/svgs";
import { Card } from "~/components";

const Borrow = () => {
  return (
    <Card
      title="Total Borrow"
      iconColor="text-secondary-500"
      icon={Icons.WalletFill}
      rightComponent={
        <p className="text-primary-800 font-bold text-xl leading-7 ">
          $ 1,820,140
        </p>
      }
    >
      <p className="flex items-center text-primary-800/50 text-xs">
        <span>Borrowers: </span>
        <span>1,421</span>
      </p>
    </Card>
  );
};

export default Borrow;
