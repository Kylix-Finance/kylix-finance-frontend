import {
  styled,
  Tooltip as MuiTooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    // TODO: Read from `secondary` palette
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[5],
    fontSize: 11,
  },
}));
