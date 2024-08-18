import { Box, Skeleton } from "@mui/material";
import Borrow from "./_parts/Borrow";
import Supply from "./_parts/Supply";
import MarketsTable from "./_parts/MarketsTable";
import { Suspense } from "react";
import { Card } from "~/components";
import { RightComponent } from "./_parts/MarketsTable/RightComponent";
import { FancyLoader } from "~/components/Loaders";

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
          <Suspense
            fallback={
              <Skeleton
                variant="rectangular"
                sx={{ width: 248, minHeight: 40, borderRadius: "6px" }}
              />
            }
          >
            <RightComponent />
          </Suspense>
        }
      >
        <Suspense
          fallback={
            <div className="w-full h-[500px] flex justify-center items-center">
              <FancyLoader />
            </div>
          }
        >
          <MarketsTable />
        </Suspense>
      </Card>
    </Box>
  );
}
