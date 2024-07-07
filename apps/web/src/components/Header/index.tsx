import { Box } from "@mui/material";
import Breadcrumbs from "./breadcrumbs";

const Header = () => {
  return (
    <Box className={"w-full h-[50px] mt-12 mb-4 flex justify-between"}>
      <div>
        <Breadcrumbs />
      </div>
      <div>Right</div>
    </Box>
  );
};

export default Header;
