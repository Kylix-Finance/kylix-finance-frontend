import { Box, Button, Link, Typography } from "@mui/material";

interface Props {
  assetId: number | string;
}

export const TableActions = ({ assetId }: Props) => {
  return (
    <Box className="flex justify-end gap-1">
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
      <Link href={`/markets/${assetId}`}>
        <Typography
          className="!text-primary-500"
          variant="md"
          fontWeight={600}
          fontFamily={"Poppins"}
        >
          Borrow
        </Typography>
      </Link>
    </Box>
  );
};
