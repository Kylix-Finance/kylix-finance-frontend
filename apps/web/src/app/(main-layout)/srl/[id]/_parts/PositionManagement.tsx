"use client";

import { Box, Card as MCard } from "@mui/material";
import PositionManagementDetail from "./PositionManagementDetail";
import { Card } from "~/components";
import ProgressBar from "~/components/ProgressBar";
import { usePools } from "~/hooks/chain/usePools";
import PositionManagementForm from "./PositionManagementForm";

const PositionManagement = () => {
  const { isLoading } = usePools();
  // const options: SelectOption[] =
  //   pools?.map((pool) => ({
  //     value: pool.assetId.toString(),
  //     label: pool.assetName,
  //   })) || [];

  return (
    <Card title="SRL position management">
      <Box className="flex w-full gap-2 flex-col lg:flex-row">
        <Box className="flex flex-col w-full flex-[0.5]">
          <PositionManagementForm />
          <MCard className="mt-2 dark:bg-black-500" variant="outlined">
            <ProgressBar data={{}} isLoading={isLoading} />
          </MCard>
        </Box>
        <PositionManagementDetail />
      </Box>
    </Card>
  );
};

export default PositionManagement;
