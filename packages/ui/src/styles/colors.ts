import { ThemeOptions } from "@mui/material";

export const grey = {
  50: "#F5F7FA",
  100: "#E9EBEE",
  200: "#D1D5DB",
  400: "#697586",
  600: "#465362",
  800: "#333333",
};

const semanticColors = {
  success: "#04A26D",
  warning: "#F59E0B",
  error: "#E11D48",
  info: "#3B82F6",
};

export const palette: ThemeOptions["palette"] = {
  primary: {
    main: "#0B5D56",
    light: "#18938A",
    dark: "#084540",
    contrastText: "#18938A",
  },
  info: {
    main: semanticColors.info,
  },
  error: {
    main: semanticColors.error,
  },
  warning: {
    main: semanticColors.warning,
  },
  success: {
    main: semanticColors.success,
  },
  background: {
    default: "#FFFFFF",
  },
  grey: {
    50: "#F5F7FA",
    100: "#E9EBEE",
    200: "#D1D5DB",
    400: "#697586",
    600: "#465362",
    800: "#333333",
  },
};

export const cryptoColors = {
  ethereum: "#627EEA",
  polkadot: "#E6007A",
  solana: "#7B78FF",
  mintLayer: "#468F6C",
  sui: "#4ECBFC",
};

export const accentColors = {
  primary: "#DBE7E6",
  primaryLight: "#DDEFEF",
  success: "#DBF5EC",
  warning: "#FEF1DB",
  error: "#FBDDE4",
  info: "#E2ECFE",
  chart:
    "linear-gradient(180deg, rgba(137, 121, 255, 0.30) 0%, rgba(137, 121, 255, 0.05) 100%)",
};

export const linearColors = {
  primary:
    "linear-gradient(180deg, rgba(86, 221, 180, 0.30) 0%, rgba(86, 221, 180, 0.05) 100%)",
  supply:
    "linear-gradient(180deg, rgba(255, 98, 200, 0.30) 0%, rgba(255, 98, 200, 0.15) 100%)",
  borrow:
    "linear-gradient(180deg, rgba(31, 148, 255, 0.30) 0%, rgba(31, 148, 255, 0.15) 100%)",
  success: "linear-gradient(90deg, #10B981 0%, #3DD2A9 49.5%, #45A996 100%)",
  warning: "linear-gradient(90deg, #F59E0B 0%, #F5BB81 49.5%, #FA9F20 100%)",
  error: "linear-gradient(90deg, #E11D48 0%, #EC4141 49.5%, #FF3028 100%)",
};

export const chartColors = {
  borrow: "#60A5FA",
  bottom: "#B3B3BB",
  grid: "#D9D9DD",
  primary: "#45A996",
  supply: "#FF62C8",
  utilization: "#5CC52B",
};
