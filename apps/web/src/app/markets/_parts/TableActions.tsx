import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  assetId: number | string;
}

export const TableActions = ({ assetId }: Props) => {
  return (
    <Box className="flex justify-end gap-1">
      <Button variant="contained">
        <Link href={`/markets/${assetId}`}>
          <Typography
            className="!text-[#FFF]"
            variant="md"
            fontWeight={600}
            fontFamily={"Poppins"}
          >
            Supply
          </Typography>
        </Link>
      </Button>
      <Button
        variant="outlined"
        disabled
        sx={{
          color: "#48484820",
          borderColor: "#48484820",
          "&:hover": {
            borderColor: "#48484820",
          },
          "& .MuiTypography-root": {
            color: "#48484820",
          },
        }}
      >
        <Typography variant="md" fontWeight={600} fontFamily={"Poppins"}>
          Borrow
        </Typography>
      </Button>
    </Box>
  );
};
