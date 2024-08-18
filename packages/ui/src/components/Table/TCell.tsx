import { Box, TableCell } from "@mui/material";

import { TCellProps } from "./types";

interface Props extends TCellProps {}

function TCell(props: Props) {
  return (
    <TableCell {...props}>
      <Box
        sx={{
          whiteSpace: "nowrap",
        }}
      >
        {props.children}
      </Box>
    </TableCell>
  );
}

export default TCell;
