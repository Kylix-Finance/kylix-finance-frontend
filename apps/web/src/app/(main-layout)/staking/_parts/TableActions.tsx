import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  assetId: number | string;
}

export const TableActions = ({ assetId }: Props) => {
  return (
    <Box className="flex justify-end gap-1">
      <Link href={`/staking/${assetId}`}>
        <Button variant="contained">
          <Typography
            className="!text-[#FFF]"
            variant="md"
            fontWeight={600}
            fontFamily={"Poppins"}
          >
            Repay
          </Typography>
        </Button>
      </Link>

      <Button variant="outlined">
        <Typography variant="md" fontWeight={600} fontFamily={"Poppins"}>
          Details
        </Typography>
      </Button>
    </Box>
  );
};
