import { Box, Typography } from "@mui/material";
import { LineBreak } from "~/components";

const BorrowValue = () => {
  return (
    <Box className="flex flex-col h-full gap-4">
      <Box className="flex flex-col p-4 border border-primary-700/10 rounded-md">
        <Box>
          <Typography variant="subtitle2" lineHeight="21px">
            Borrow Value
          </Typography>
        </Box>
        <Box className="flex gap-1.5 items-center">
          <Typography
            variant="h5"
            fontStyle="bold"
            lineHeight="30px"
            className="font-number"
          >
            $4,100,200
          </Typography>

          <Typography
            variant="body3"
            fontStyle="bold"
            fontWeight="400"
            lineHeight="17px"
          >
            USD
          </Typography>
        </Box>
      </Box>

      <Box className="flex flex-col h-full gap-4 p-4 border border-primary-700/10 rounded-md">
        <Box className="flex flex-col gap-1.5">
          <Box>
            <Typography className="!text-[12px] !font-[500] text-[#1A433B80] !leading-[18px]">
              Borrow limit
            </Typography>
          </Box>

          <Box className="flex gap-[6px] items-center">
            <Typography
              variant="subtitle1"
              lineHeight="22px"
              className="font-number"
            >
              $4,100,200
            </Typography>
            <Typography variant="body3" lineHeight="17px">
              USD
            </Typography>
          </Box>
        </Box>

        <LineBreak />

        <Box className="flex">
          <Box className="flex flex-col gap-1.5 w-1/2">
            <Typography
              variant="body3"
              fontWeight={500}
              lineHeight="18px"
              className="text-primary-800/50"
            >
              Net Earn APR
            </Typography>

            <Typography
              variant="subtitle1"
              lineHeight={"22px"}
              className="text-primary-500 font-number"
            >
              %18.2
            </Typography>
          </Box>

          <Box className="flex flex-col gap-[6px] w-[50%]">
            <Typography
              variant="body3"
              fontWeight={500}
              lineHeight="18px"
              className="text-primary-800/50"
            >
              LTV
            </Typography>

            <Typography
              variant="subtitle1"
              lineHeight={"22px"}
              className="text-primary-500 font-number"
            >
              %42.6
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BorrowValue;
