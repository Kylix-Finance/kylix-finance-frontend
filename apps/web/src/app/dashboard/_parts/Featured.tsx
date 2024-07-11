import { Box, Button, Switch } from "@mui/material";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <Box className="flex flex-col gap-2.5 mt-6">
      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </Box>
      <Box className="flex justify-between w-full items-center">
        <Button
          variant="outlined"
          size="small"
          className="px-1.5 py-2.5 !border-[#1A433B1A] !rounded-lg !capitalize !text-primary-800 !font-semibold !text-xs !leading-4 !text-center load-more-ripple"
        >
          <p>+ Load more</p>
        </Button>
        <Box className="flex items-center gap-1.5">
          {/* <Switch /> */}
          <p className="text-xs font-semibold leading-4 text-primary-800">
            Detailed View
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Featured;
