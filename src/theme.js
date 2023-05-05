// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     backgroundColor: theme.palette.primary,
//     marginBottom: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     marginLeft: theme.spacing(2),
//   },
//   select: {
//     color: theme.palette.primary.contrastText,
//     marginRight: theme.spacing(2),
//   },
//   checkboxGroup: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginLeft: "auto",
//     marginRight: theme.spacing(2),
//   },
//   checkbox: {
//     color: theme.palette.primary.contrastText,
//     borderRadius: "5px",
//     "&.Mui-checked": {
//       color: theme.palette.primary.contrastText,
//       borderRadius: "5px",
//     },
//     "& .MuiSvgIcon-root": {
//       border: "1px solid " + theme.palette.primary.contrastText,
//     },
//     marginBottom: theme.spacing(1),
//   },
//   inProgress: {
//     borderColor: theme.palette.warning.main,
//     color: theme.palette.warning.main,
//   },
//   cancelled: {
//     borderColor: theme.palette.error.main,
//     color: theme.palette.error.main,
//   },
//   ended: {
//     borderColor: theme.palette.success.main,
//     color: theme.palette.success.main,
//   },
//   statusLabel: {
//     marginBottom: theme.spacing(1),
//   },
// }));

import { createMuiTheme } from "@mui/material";

//  for all above styles  generate color palette based mui theme
const palette = {
  primary: {
    main: "#1976d2",
    contrastText: "#fff",
  },
  secondary: {
    main: "#dc004e",
    contrastText: "#fff",
  },
  error: {
    main: "#d32f2f",
    contrastText: "#fff",
  },
  warning: {
    main: "#ffa000",
    contrastText: "#fff",
  },
  info: {
    main: "#2196f3",
    contrastText: "#fff",
  },
  success: {
    main: "#388e3c",
    contrastText: "#fff",
  },
  type: "light",
};
export const lightTheme = createMuiTheme({
  palette: palette,
});
