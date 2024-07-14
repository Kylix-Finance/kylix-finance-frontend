import { Box, TableCell } from "@mui/material";

import { TCellProps } from "./types";

interface Props extends TCellProps {}

function TCell(props: Props) {
  return (
    <TableCell {...props}>
      <Box
        sx={{
          minWidth: 100,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {props.children}
      </Box>
    </TableCell>
  );
}

export default TCell;
