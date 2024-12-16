import React from "react";

import { Box, Typography } from "@mui/material";
import { TokenIcon } from "~/components";
interface Props {
  iconName: string | undefined;
  iconWidth?: number | undefined;
  iconHeight?: number | undefined;
  value: string | number;
}

const ValueItemWrapper = ({
  iconHeight,
  iconName,
  iconWidth,
  value,
}: Props) => {
  return (
    <Box display="flex" alignItems="center" gap="8px">
      <Typography
        className={"text-primary-800 dark:text-white  font-number"}
        variant="subtitle2"
        fontWeight="600"
      >
        {value}
      </Typography>
      <TokenIcon symbol={iconName} width={iconWidth} height={iconHeight} />
    </Box>
  );
};

export default ValueItemWrapper;
