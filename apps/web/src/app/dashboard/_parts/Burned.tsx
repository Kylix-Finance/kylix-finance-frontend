import { Box } from "@mui/material";
import { numToLocalString } from "~/utils";

const Burned = () => {
  return (
    <Box className="flex gap-5">
      <p className="text-secondary-500">
        {numToLocalString(302200)}{" "}
        <span className="ml-2 text-neutral-400">KYL</span>
      </p>
      <p>
        {numToLocalString(514100)}{" "}
        <span className="ml-2 text-neutral-400">USD</span>
      </p>
    </Box>
  );
};

export default Burned;
