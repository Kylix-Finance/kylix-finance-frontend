import { Typography } from "@mui/material";
import { Icons } from "~/assets/svgs";
import { Card } from "~/components";

const Borrow = () => {
  return (
    <Card
      title="Total Borrow"
      iconColor="text-secondary-500"
      icon={Icons.WalletFill}
      rightComponent={
        <Typography variant="h5" className="text-primary-800">
          $ 1,820,140
        </Typography>
      }
    >
      <Typography
        variant="caption"
        className="flex items-center text-primary-800/50"
      >
        <span>Borrowers: </span>
        <span>1,421</span>
      </Typography>
    </Card>
  );
};

export default Borrow;
