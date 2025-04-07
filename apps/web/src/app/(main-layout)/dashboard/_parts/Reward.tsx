import { Box, Typography } from "@mui/material";
import { numToLocalString } from "~/utils";

const Reward = () => {
  return (
    <Box className="flex gap-5">
      <Typography className="text-primary-500" fontWeight="500" variant="h5">
        {numToLocalString(20400)}{" "}
        <Typography
          className="text-neutral-400"
          component="span"
          marginLeft="8px"
          variant="body3"
        >
          KYL
        </Typography>
      </Typography>
      <Typography className="dark:text-white" fontWeight="500" variant="h5">
        {numToLocalString(82100)}{" "}
        <Typography
          className="text-neutral-400"
          component="span"
          marginLeft="8px"
          variant="body3"
        >
          USD
        </Typography>
      </Typography>
    </Box>
  );
};

export default Reward;
