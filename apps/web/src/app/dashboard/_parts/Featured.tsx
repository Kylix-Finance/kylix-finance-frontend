import { Button, Switch } from "@mui/material";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <div className="flex flex-col gap-2.5 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
      <div className="flex justify-between w-full items-center">
        <Button
          variant="outlined"
          size="small"
          className="px-1.5 py-2.5 !border-[#1A433B1A] !rounded-lg !capitalize !text-primary-800 !font-semibold !text-xs !leading-4 !text-center load-more-ripple"
        >
          <p>+ Load more</p>
        </Button>
        <div className="flex items-center gap-1.5">
          <Switch />
          <p className="text-xs font-semibold leading-4 text-primary-800">
            Detailed View
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
