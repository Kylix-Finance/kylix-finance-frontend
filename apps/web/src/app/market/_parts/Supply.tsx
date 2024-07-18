import { Typography } from "@mui/material";
import { Icons } from "~/assets/svgs";
import { Card } from "~/components";

const Supply = () => {
  return (
    <Card
      title="Total Supply"
      icon={Icons.WalletFill}
      rightComponent={
        <Typography variant="h5" className="text-primary-800">
          $ 2,100,140
        </Typography>
      }
    >
      <Typography
        variant="body3"
        className="flex items-center text-primary-800/50"
      >
        <span>Suppliers: </span>
        <span>1,200</span>
      </Typography>
    </Card>
  );
};

export default Supply;
