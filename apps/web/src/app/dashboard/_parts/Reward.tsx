import { Box } from "@mui/material";
import { numToLocalString } from "~/utils";

const Reward = () => {
  return (
    <Box className="flex gap-5">
      <p className="text-primary-500">
        {numToLocalString(20400)}{" "}
        <span className="ml-2 text-neutral-400">KYL</span>
      </p>
      <p>
        {numToLocalString(82100)}{" "}
        <span className="ml-2 text-neutral-400">USD</span>
      </p>
    </Box>
  );
};

export default Reward;
