import { Box } from "@mui/material";
import Borrow from "./_parts/Borrow";
import Supply from "./_parts/Supply";
import MarketsTable from "./_parts/MarketsTable";
import { Suspense } from "react";
import { Card } from "~/components";
import { RightComponent } from "./_parts/MarketsTable/RightComponent";

export default function Page() {
  return (
    <Box className="flex flex-col gap-4">
      <Box className="flex flex-col lg:flex-row gap-4">
        <Supply />
        <Borrow />
      </Box>
      <Card
        title="Markets"
        rightComponent={
          <Suspense>
            <RightComponent />
          </Suspense>
        }
      >
        <Suspense>
          <MarketsTable />
        </Suspense>
      </Card>
    </Box>
  );
}
