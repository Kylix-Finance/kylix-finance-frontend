import { Box } from "@mui/material";
import PositionManagementDetail from "./PositionManagementDetail";
import { Card } from "~/components";

const PositionManagement = () => {
  return (
    <Card title="SRL position management">
      <Box className="flex w-full">
        <div className="flex flex-col w-full flex-[0.5]">
          <div>form</div>
          <div>progress bar</div>
        </div>
        <PositionManagementDetail />
      </Box>
    </Card>
  );
};

export default PositionManagement;
