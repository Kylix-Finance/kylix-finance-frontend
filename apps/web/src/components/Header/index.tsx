import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      className={
        "w-full h-[50px] mt-12 mb-4 flex flex-col justify-between bg-green-300"
      }
    >
      <div>breadcrumb</div>
      <div>Title</div>
    </Box>
  );
};

export default Header;
