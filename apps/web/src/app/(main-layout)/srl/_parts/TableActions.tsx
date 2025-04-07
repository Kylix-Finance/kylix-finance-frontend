import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  assetId: number | string;
}

export const TableActions = ({ assetId }: Props) => {
  return (
    <Box className="flex justify-end gap-1">
      <Link href={`/srl/${assetId}`}>
        <Button variant="contained">
          <Typography className="!text-[#FFF]" fontWeight={600} variant="body3">
            Repay
          </Typography>
        </Button>
      </Link>

      <Button variant="outlined">
        <Typography fontWeight={600} variant="body3">
          Details
        </Typography>
      </Button>
    </Box>
  );
};
