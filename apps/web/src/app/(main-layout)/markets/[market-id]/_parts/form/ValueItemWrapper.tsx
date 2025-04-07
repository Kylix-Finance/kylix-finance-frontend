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
    <Box alignItems="center" display="flex" gap="8px">
      <Typography
        className="text-primary-800 dark:text-white  font-number"
        fontWeight="600"
        variant="subtitle2"
      >
        {value}
      </Typography>
      <TokenIcon height={iconHeight} symbol={iconName} width={iconWidth} />
    </Box>
  );
};

export default ValueItemWrapper;
