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
        <Box className="flex flex-col w-full py-3 px-4 border border-primary-800/10 rounded-[6px]">
          <Typography
            variant="caption"
            fontWeight={700}
            lineHeight={"15px"}
            className="text-primary-800"
          >
            KLX Price
          </Typography>

          <Typography
            className="text-primary-500"
            variant="body1"
            lineHeight="20px"
          >
            $ 0.25
          </Typography>
        </Box>
        <Box className="flex  w-full py-3 px-4 border border-primary-800/10 rounded-md justify-between items-end">
          <Box className="flex flex-col">
            <Typography
              variant="caption"
              fontWeight={700}
              lineHeight={"15px"}
              className="text-primary-800"
            >
              Rewards
            </Typography>

            <Typography
              className="text-primary-500"
              variant="body1"
              lineHeight="20px"
            >
              258
              <Typography variant="caption">KLX</Typography>
            </Typography>
          </Box>
          <div>
            <Button size="small" variant="outlined" disableElevation>
              <Typography
                variant="caption"
                fontWeight={600}
                lineHeight="13px"
                className="capitalize text-center  min-h-0"
              >
                Reward
              </Typography>
            </Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default CollateralValue;
