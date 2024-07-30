import { Box } from "@mui/material";
import Borrow from "./_parts/Borrow";
import MarketsTable from "./_parts/MarketsTable";
import Supply from "./_parts/Supply";

export default function Page() {
  return (
    <Box className="flex flex-col gap-4">
      <Box className="flex flex-col lg:flex-row gap-4">
        <Supply />
        <Borrow />
      </Box>
      <MarketsTable />
    </Box>
  );
}
