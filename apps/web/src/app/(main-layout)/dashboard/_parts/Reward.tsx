import { Box, Typography } from "@mui/material";
import { numToLocalString } from "~/utils";

const Reward = () => {
  return (
    <Box className="flex gap-5">
      <Typography variant="h5" fontWeight="500" className="text-primary-500">
        {numToLocalString(20400)}{" "}
        <Typography
          component="span"
          variant="body3"
          marginLeft="8px"
          className="text-neutral-400"
        >
          KYL
        </Typography>
      </Typography>
      <Typography variant="h5" fontWeight="500">
        {numToLocalString(82100)}{" "}
        <Typography
          component="span"
          variant="body3"
          marginLeft="8px"
          className="text-neutral-400"
        >
          USD
        </Typography>
      </Typography>
    </Box>
  );
};

export default Reward;
