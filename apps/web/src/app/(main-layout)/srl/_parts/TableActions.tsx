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
          <Typography className="!text-[#FFF]" variant="body3" fontWeight={600}>
            Repay
          </Typography>
        </Button>
      </Link>

      <Button variant="outlined">
        <Typography variant="body3" fontWeight={600}>
          Details
        </Typography>
      </Button>
    </Box>
  );
};
