import { Box, Button, Typography } from "@mui/material";
import Doughnut from "~/components/Charts/DoughnutChart";
import { FinanceSummary } from "~/components";
import { numToLocalString } from "~/utils";

const CollateralValue = () => {
  const data = [
    { label: "Asset 1", color: "#45A996", value: 20 },
    { label: "Asset 2", color: "#A67B97", value: 30 },
    { label: "Asset 3", color: "#C9E0DE", value: 50 },
  ];

  return (
    <Box className="flex flex-col h-full">
      <Typography variant="h4" marginBottom="36px">
        {numToLocalString(65800200)}{" "}
        <Typography variant="body3">USD</Typography>
      </Typography>
      <Box className="flex mb-auto gap-6">
        <Doughnut
          backgroundColor={data.map((item) => item.color)}
          data={data.map((item) => item.value)}
          labels={data.map((item) => item.label)}
        />

        <Box className="grid grid-cols-2 gap-4">
          {data.map((item) => {
            return (
              <div key={item.label}>
                <FinanceSummary
                  key={item.label}
                  label={item.label}
                  value={Math.floor(item.value * Math.random() * 1000)}
                  color={item.color}
                />
              </div>
            );
          })}
        </Box>
      </Box>

      <Box className="flex gap-3">
        <Box className="flex flex-col w-[100%] h-[64] p-[12px_8px] border border-[#62938A33] rounded-[6px]">
          <Typography className="!text-[#1A433B] !font-[700] !text-[10px] !leading-[15px]">
            KLX Price
          </Typography>

          <Typography
            className="!text-[#45A996] !text-[14px] !font-[500] !leading-[20px]"
            fontFamily="Poppins"
          >
            $ 0.25
          </Typography>
        </Box>

        <Box className="flex flex-col w-[100%] h-[64] p-[12px_8px] border border-[#62938A33] rounded-[6px]">
          <Typography className="!text-[#1A433B] !font-[700] !text-[10px] !leading-[15px]">
            Rewards
          </Typography>

          <Box className="flex justify-between">
            <Box className="flex gap-[5px] items-center">
              <Typography
                className="!text-[#45A996] !text-[14px] !font-[500] !leading-[20px]"
                fontFamily="Poppins"
              >
                258
              </Typography>
              <Typography className="!text-[#45A996] !text-[10px] !font-[500] !leading-[15px]">
                KLX
              </Typography>
            </Box>
            <Button
              className="!p-[4px_8px] !border-[#45A996] !rounded-[8px] !border-[2px]"
              variant="outlined"
            >
              <Typography
                className="!text-[#45A996] !text-[10px] !font-[600] !leading-[14px]  "
                fontFamily="Poppins"
              >
                Claim
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CollateralValue;
