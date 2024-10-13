"use client";
import { Box, List, Card as MCard, Typography } from "@mui/material";
import PositionManagementDetail from "./PositionManagementDetail";
import { Card } from "~/components";
import ProgressBar from "~/components/ProgressBar";
import { InputWithSelect } from "~/components/InputWithSelect";
import { usePools } from "~/hooks/chain/usePools";
import { SelectOption } from "~/types";

const PositionManagement = () => {
  const { pools } = usePools();
  const options: SelectOption[] =
    pools?.map((pool) => ({
      value: pool.assetId.toString(),
      label: pool.assetName,
    })) || [];
  return (
    <Card title="SRL position management">
      <Box className="flex w-full gap-2">
        <div className="flex flex-col w-full flex-[0.5]">
          <div></div>
          <MCard variant="outlined">
            <ProgressBar />
          </MCard>
        </div>
        <PositionManagementDetail />
      </Box>
    </Card>
  );
};

export default PositionManagement;
