import { defaultTheme } from "react-admin";

export const theme = {
  ...defaultTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#303030",
    },
  },
};
