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
    text: {
      primary: "#ffffff", // white
      secondary: "#bdbdbd", // light gray
      disabled: "#757575", // medium gray
      hint: "#9e9e9e", // dark gray
    },
    background: {
      default: "#303030",
    },
  },
};
