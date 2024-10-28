import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  assetId: number | string;
  firstAction?: string;
  secondActionb?: string;
}

// TODO: Extract to components
export const TableActions = ({
  assetId,
  firstAction = "Supply",
  secondActionb = "Borrow",
}: Props) => {
  return (
    <Box className="flex justify-end gap-1">
      <Link href={`/markets/${assetId}`}>
        <Button variant="contained">
          <Typography className="!text-[#FFF]" variant="body3" fontWeight={600}>
            {firstAction}
          </Typography>
        </Button>
      </Link>
      <Link href={`/markets/${assetId}`}>
        <Button variant="outlined">
          <Typography variant="body3" fontWeight={600}>
            {secondActionb}
          </Typography>
        </Button>
      </Link>
    </Box>
  );
};
