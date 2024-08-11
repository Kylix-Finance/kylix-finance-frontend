import { Tab as MUITab, TabProps, useTheme } from "@mui/material";

interface Props extends TabProps {}

const Tab = ({ ...rest }: Props) => {
  const theme = useTheme();
  return (
    <MUITab
      sx={{
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
          fontWeight: "bold !important",
        },
        "&.Mui-disabled": {
          "&.Mui-selected": {
            backgroundColor: "red !important",
          },
        },
        minHeight: "auto",
        maxHeight: "auto",
        padding: "4px 8px",
        textTransform: "capitalize",
        borderRadius: "8px",
        paddingY: "12px",
        paddingX: "5px",
        marginY: "0px",
        marginX: "4px",
        minWidth: "auto",
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "12px",
      }}
      disableRipple
      {...rest}
    />
  );
};

export default Tab;
