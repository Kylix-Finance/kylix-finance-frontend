import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  assetId: number | string;
}

export const TableActions = ({ assetId }: Props) => {
  return (
    <Box className="flex justify-end gap-1">
      <Link href={`/markets/${assetId}`}>
        <Button variant="contained">
          <Typography
            className="!text-[#FFF]"
            variant="body3"
            fontWeight={600}
            fontFamily={"Poppins"}
          >
            Supply
          </Typography>
        </Button>
      </Link>

      {/*FIXME: remove styles for milestone 2 */}
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
        <Typography variant="body3" fontWeight={600} fontFamily={"Poppins"}>
          Borrow
        </Typography>
      </Button>
    </Box>
  );
};
