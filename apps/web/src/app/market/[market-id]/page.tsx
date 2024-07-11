import { Card } from "~/components";
import TransactionForm from "./_parts/TransactionForm";
import PoolDetails from "./_parts/PoolDetails";
import { Box } from "@mui/material";

export default function page() {
  return (
    <Card>
      <Box className="grid grid-cols-1 lg:grid-cols-11 gap-4">
        <Box className="col-span-full lg:col-span-7">
          <PoolDetails />
        </Box>
        <Box className="col-span-full lg:col-span-4">
          <TransactionForm />
        </Box>
      </Box>
    </Card>
  );
}
