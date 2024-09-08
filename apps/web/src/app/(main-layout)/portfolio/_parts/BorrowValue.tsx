import { Box, Button, Typography } from "@mui/material";
import { LineBreak } from "~/components";

const BorrowValue = () => {
  return (
    <Box className="flex flex-col h-full gap-4">
      <Box className="flex flex-col h-[87] p-4 border border-[#62938A33] rounded-[6px]">
        <Box>
          <Typography className="!text-[14px] !font-[700] !leading-[21px]">
            Borrow Value
          </Typography>
        </Box>
        <Box className="flex gap-[6px] items-center">
          <Typography
            fontFamily="Poppins"
            className="!text-[22px] !font-[700] !leading-[30px]"
          >
            $4,100,200
          </Typography>

          <Typography
            fontFamily="Poppins"
            className="!text-[12px] !font-[400] !leading-[17px]"
          >
            USD
          </Typography>
        </Box>
      </Box>

      <Box className="flex flex-col h-[100%] gap-4 p-4 border border-[#62938A33] rounded-[6px]">
        <Box className="flex flex-col gap-[6px]">
          <Box>
            <Typography className="!text-[12px] !font-[500] text-[#1A433B80] !leading-[18px]">
              Borrow limit
            </Typography>
          </Box>

          <Box className="flex gap-[6px] items-center">
            <Typography
              fontFamily="Poppins"
              className="!text-[16px] !font-[700] !leading-[22px]"
            >
              $4,100,200
            </Typography>
            <Typography
              fontFamily="Poppins"
              className="!text-[12px] !font-[400] !leading-[17px]"
            >
              USD
            </Typography>
          </Box>
        </Box>

        <LineBreak />

        <Box className="flex">
          <Box className="flex flex-col gap-[6px] w-[50%]">
            <Typography className="!text-[12px] !text-[#1A433B80]  !font-[500] !leading-[18px]">
              Net Earn APR
            </Typography>

            <Typography
              fontFamily="Poppins"
              className="!text-[16px] !text-[#45A996] !font-[700] !leading-[22px]"
            >
              %18.2
            </Typography>
          </Box>

          <Box className="flex flex-col gap-[6px] w-[50%]">
            <Typography className="!text-[12px] !text-[#1A433B80] !font-[500] !leading-[18px]">
              LTV
            </Typography>

            <Typography
              fontFamily="Poppins"
              className="!text-[16px] !font-[700] !text-[#45A996] !leading-[22px]"
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
