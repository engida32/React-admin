import React from "react";

import {
  AppBar,
  Box,
  Checkbox,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import { makeStyles } from "@mui/styles";
import { defaultTheme, useTheme } from "react-admin";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary,
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  select: {
    color: theme.palette.primary.contrastText,
    marginRight: theme.spacing(2),
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: theme.spacing(2),
  },
  checkbox: {
    color: theme.palette.primary.contrastText,
    borderRadius: "5px",
    "&.Mui-checked": {
      color: theme.palette.primary.contrastText,
      borderRadius: "5px",
    },
    "& .MuiSvgIcon-root": {
      border: "1px solid " + theme.palette.primary.contrastText,
    },
    marginBottom: theme.spacing(1),
  },
  inProgress: {
    borderColor: theme.palette.warning.main,
    color: theme.palette.warning.main,
  },
  cancelled: {
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
  },
  ended: {
    borderColor: theme.palette.success.main,
    color: theme.palette.success.main,
  },
  statusLabel: {
    marginBottom: theme.spacing(1),
  },
}));

const CustomAppBar = ({ toggleTheme }) => {
  const classes = useStyles();
  const [theme, setTheme] = useTheme();

  const lightTheme = defaultTheme;
  const darkTheme = {
    ...defaultTheme,
    palette: {
      mode: "dark",
    },
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box display="flex" alignItems="center " flex={1}>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <Box flex={2}>
            <FormControl>
              <Select
                className={classes.select}
                defaultValue={"option 1"}
                displayEmpty
              >
                <MenuItem value="option 1" disabled>
                  Objective
                </MenuItem>
                <MenuItem value={"Option 1"}>Option 1</MenuItem>
                <MenuItem value={"Option 2"}>Option 2</MenuItem>
                <MenuItem value={"Option 3"}>Option 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                border: `1px solid secondary.main`,
                borderRadius: "5px",
              }}
            >
              <Select className={classes.select} defaultValue={"Option 2"}>
                <MenuItem value="Option 1" disabled>
                  Model
                </MenuItem>
                <MenuItem value={"Option 1"}>Option 1</MenuItem>
                <MenuItem value={"Option 2"}>Option 2</MenuItem>
                <MenuItem value={"Option 3"}>Option 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" className={classes.statusLabel}>
              Status
            </Typography>
            <Checkbox
              className={`${classes.checkbox} ${classes.inProgress}`}
              defaultChecked
            >
              In Progress
            </Checkbox>
            <Checkbox className={`${classes.checkbox} ${classes.cancelled}`}>
              Cancelled
            </Checkbox>
            <Checkbox className={`${classes.checkbox} ${classes.ended}`}>
              Ended
            </Checkbox>
          </Box>
        </Box>
        <IconButton
          className={classes.iconButton}
          onClick={() =>
            setTheme(theme.palette.mode === "dark" ? lightTheme : darkTheme)
          }
        >
          {theme.palette.mode === "dark" ? (
            <Brightness4Icon
              sx={{
                color: "white",
              }}
            />
          ) : (
            <Brightness4Icon
              sx={{
                color: "black",
              }}
            />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
