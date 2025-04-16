import { Components, CssVarsTheme, Theme } from "@mui/material";
import { palette } from "../colors";
import { typography } from "../typography";

export const components: Components<
  Omit<Theme, "components" | "palette"> & CssVarsTheme
> = {
  MuiTabs: {
    styleOverrides: {
      root: {
        border: "1px solid",
        //FIXME: should be replace by palette
        borderColor: "#1E1E1E80",
        backdropFilter: "blur(10px)",
        borderRadius: "9999px",
        width: "fit-content",
        padding: "4px",
        ...typography.btn,
      },
      indicator: {
        display: "none",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        borderRadius: "9999px",
        color: palette?.grey?.[400],
        textTransform: "none",
        padding: "10px 18px",
        ...typography.btn,
        "&.Mui-selected": {
          border: "1px solid",
          borderColor: palette?.primary,
          //FIXME: should be replace by palette
          backgroundColor: "#56DDB433",
          color: palette?.primary,
        },
      },
    },
  },
};
