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
            backgroundColor: "#A5CAC3 !important",
          },
        },
        minHeight: "auto",
        maxHeight: "auto",
        padding: "4px 8px",
      }}
      className="!capitalize !rounded-lg !px-1.5 !py-3 !my-0 !mx-1 !min-w-[auto] !text-sm !font-medium"
      disableRipple
      {...rest}
    />
  );
};

export default Tab;
