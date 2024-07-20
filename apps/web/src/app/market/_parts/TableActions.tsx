import { Box, Button, Typography } from "@mui/material";

export const TableActions = () => {
  return (
    <Box className="flex gap-1">
      <Button style={{ padding: "4px 12px" }} variant="contained">
        <Typography
          className="!text-[#FFF]"
          variant="md"
          fontWeight={600}
          fontFamily={"Poppins"}
        >
          Supply
        </Typography>
      </Button>
      <Button style={{ padding: "4px 12px" }} variant="outlined">
        <Typography
          className="!text-primary-500"
          variant="md"
          fontWeight={600}
          fontFamily={"Poppins"}
        >
          Borrow
        </Typography>
      </Button>
    </Box>
  );
};
