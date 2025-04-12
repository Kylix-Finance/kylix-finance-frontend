"use client";

import { AlertColor, Box, Paper, Typography, useTheme } from "@mui/material";
import { shadowsObj } from "../../styles/theme/shadows";

import { HiLockClosed, HiInformationCircle } from "react-icons/hi2";
import { SVGIcon } from "@repo/icons/svgIcon";

interface Props {
  description: string;
  severity: AlertColor | "message";
  title?: string;
}

export const Alert = ({ description, severity, title }: Props) => {
  const theme = useTheme();

  const severityColor: Record<Props["severity"], string> = {
    error: theme.palette.error.main,
    info: theme.palette.info.main,
    message: theme.palette.info.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
  };

  return (
    <Paper
      className="border border-solid"
      sx={{
        borderColor: severityColor[severity],
        borderRadius: theme.spacing("5"),
        boxShadow: severityShadow[severity],
        padding: theme.spacing("4"),
      }}
    >
      <Box className="flex flex-col gap-[8px] ">
        <Box className="flex flex-row items-center justify-between">
          <Box className="flex flex-row items-center gap-[8px]">
            <SVGIcon icon={HiInformationCircle} />

            <Typography variant="h5" color={severityColor[severity]}>
              {title}
            </Typography>
          </Box>
          <SVGIcon icon={HiLockClosed} />
        </Box>
        <Box className="flex flex-row gap-[8px]">
          <Box className="size-[24px]" />
          <Typography variant="body" color="grey.600">
            {description}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

const severityShadow: Record<Props["severity"], string> = {
  error: shadowsObj.risk,
  success: shadowsObj.success,
  info: shadowsObj.default,
  warning: shadowsObj.warning,
  message: shadowsObj.default,
};
