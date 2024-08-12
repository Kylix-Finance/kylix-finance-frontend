import { Box } from "@mui/material";
import Borrow from "./_parts/Borrow";
import Supply from "./_parts/Supply";
import MarketsTable from "./_parts/MarketsTable";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box className="flex flex-col gap-4">
        <Box className="flex flex-col lg:flex-row gap-4">
          <Supply />
          <Borrow />
        </Box>
        <MarketsTable />
      </Box>
    </Suspense>
  );
}
