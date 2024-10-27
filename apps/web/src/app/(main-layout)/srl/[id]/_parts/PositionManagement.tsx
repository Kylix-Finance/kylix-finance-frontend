"use client";
import { Box, List, Card as MCard, Typography } from "@mui/material";
import PositionManagementDetail from "./PositionManagementDetail";
import { Card } from "~/components";
import ProgressBar from "~/components/ProgressBar";
import { InputWithSelect } from "~/components/InputWithSelect";
import { usePools } from "~/hooks/chain/usePools";
import { SelectOption } from "~/types";
import PositionManagementForm from "./PositionManagementForm";

const PositionManagement = () => {
  const { pools } = usePools();
  const options: SelectOption[] =
    pools?.map((pool) => ({
      value: pool.assetId.toString(),
      label: pool.assetName,
    })) || [];

  return (
    <Card title="SRL position management">
      <Box className="flex w-full gap-2 flex-col lg:flex-row">
        <Box className="flex flex-col w-full flex-[0.5]">
          <PositionManagementForm />
          <MCard variant="outlined" className="mt-2">
            <ProgressBar />
          </MCard>
        </Box>
        <PositionManagementDetail />
      </Box>
    </Card>
  );
};

export default PositionManagement;
