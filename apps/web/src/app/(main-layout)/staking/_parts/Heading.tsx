import { Box, Typography } from "@mui/material";

export const Heading = () => {
  return (
    <Box className="flex flex-row gap-[50px]">
      <Box className="flex flex-row gap-[8px] justify-between items-center">
        <Typography className="!text-[14px] text-[#767F7D] !font-[500] !leading-6">
          Borrow Balance:
        </Typography>

        <Typography
          className="!text-[16px] !font-[600] !leading-[22px]"
          fontFamily={"Poppins"}
        >
          $ {Intl.NumberFormat("en").format(1800140)}
        </Typography>
      </Box>

      <Box className="flex flex-row gap-[8px] justify-between items-center">
        <Typography className="!text-[14px] text-[#767F7D] !font-[500] !leading-6">
          Collateral Balance:
        </Typography>

        <Typography
          className="!text-[16px] !font-[600] !leading-[22px]"
          fontFamily={"Poppins"}
        >
          $ {Intl.NumberFormat("en").format(1500240)}
        </Typography>
      </Box>

      <Box className="flex flex-row gap-[8px] justify-between items-center">
        <Typography className="!text-[14px] text-[#767F7D] !font-[500] !leading-6">
          Loan Status
        </Typography>

        <Typography
          className="!text-[16px] text-[#767F7D] !font-[600] !leading-[22px]"
          fontFamily={"Poppins"}
        >
          Low risk
        </Typography>
      </Box>
    </Box>
  );
};
