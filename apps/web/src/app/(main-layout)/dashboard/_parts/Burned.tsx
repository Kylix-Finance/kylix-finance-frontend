import { Box, Typography } from "@mui/material";
import { numToLocalString } from "~/utils";

const Burned = () => {
  return (
    <Box className="flex gap-5">
      <Typography variant="h5" fontWeight="500" className="text-secondary-500">
        {numToLocalString(302200)}{" "}
        <Typography
          component="span"
          variant="body3"
          className="ml-2 text-neutral-400"
        >
          KYL
        </Typography>
      </Typography>
      <Typography variant="h5" fontWeight="500" className="dark:text-white">
        {numToLocalString(514100)}{" "}
        <Typography
          component="span"
          variant="body3"
          fontWeight="500"
          marginLeft="8px"
          className="text-neutral-400"
        >
          USD
        </Typography>
      </Typography>
    </Box>
  );
};

export default Burned;
