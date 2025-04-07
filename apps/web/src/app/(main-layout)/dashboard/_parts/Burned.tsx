import { Box, Typography } from "@mui/material";
import { numToLocalString } from "~/utils";

const Burned = () => {
  return (
    <Box className="flex gap-5">
      <Typography className="text-secondary-500" fontWeight="500" variant="h5">
        {numToLocalString(302200)}{" "}
        <Typography
          className="ml-2 text-neutral-400"
          component="span"
          variant="body3"
        >
          KYL
        </Typography>
      </Typography>
      <Typography className="dark:text-white" fontWeight="500" variant="h5">
        {numToLocalString(514100)}{" "}
        <Typography
          className="text-neutral-400"
          component="span"
          fontWeight="500"
          marginLeft="8px"
          variant="body3"
        >
          USD
        </Typography>
      </Typography>
    </Box>
  );
};

export default Burned;
