import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  assetId: number | string;
  firstAction?: string;
  secondAction?: string;
}

// TODO: Extract to components
export const TableActions = ({
  assetId,
  firstAction = "Supply",
  secondAction = "Borrow",
}: Props) => {
  return (
    <Box className="flex justify-end gap-1">
      <Link href={`/markets/${assetId}?tab=${firstAction.toLowerCase()}`}>
        <Button className="dark:bg-[#56DDB4]" variant="contained">
          <Typography
            className="text-[#FFF] dark:text-[#0D0D0D]"
            variant="body3"
            fontWeight={600}
          >
            {firstAction}
          </Typography>
        </Button>
      </Link>
      <Link href={`/markets/${assetId}?tab=${secondAction.toLowerCase()}`}>
        <Button variant="outlined">
          <Typography
            variant="body3"
            className="dark:text-[#56DDB4]"
            fontWeight={600}
          >
            {secondAction}
          </Typography>
        </Button>
      </Link>
    </Box>
  );
};
