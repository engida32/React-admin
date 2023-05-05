import React from "react";

import {
  AppBar,
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  OutlinedInput,
  Select,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { makeStyles } from "@mui/styles";
import { defaultTheme, useTheme } from "react-admin";
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

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
  const [personName, setPersonName] = React.useState([]);
  const [select2, setSelect2] = React.useState([]);
  const [select, setSelect] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setSelect2(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setSelect(typeof value === "string" ? value.split(",") : value);
  };

  const lightTheme = defaultTheme;
  const darkTheme = {
    ...defaultTheme,
    palette: {
      mode: "dark",
    },
  };

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          padding: 2,
          boxShadow:
            "0px 2px 4px rgba(0, 0, 0, 3.25), 0px 4px 8px rgba(0, 0, 0, 0.15), 0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Box
          display="flex"
          alignItems="center "
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" className={classes.title}>
            React Admin
          </Typography>
          <Box flex={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mx: 3,
              }}
            >
              <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id="demo-multiple-name-label">
                  Filter data set{" "}
                </InputLabel>
                <Select
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                >
                  <MenuItem disabled value="">
                    <em>Placeholder</em>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id="demo-multiple-name-label">
                  Select the Project
                </InputLabel>
                <Select
                  multiple
                  displayEmpty
                  value={select2}
                  onChange={handleChange2}
                  input={<OutlinedInput />}
                >
                  <MenuItem disabled value="">
                    <em>Placeholder</em>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id="demo-multiple-name-label">
                  Filter Output
                </InputLabel>
                <Select
                  multiple
                  displayEmpty
                  value={select}
                  onChange={handleChange3}
                  input={<OutlinedInput />}
                >
                  <MenuItem disabled value="">
                    <em>Placeholder</em>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              align="center"
              variant="h6"
              className={classes.statusLabel}
              fontSize={16}
              fontWeight="bold"
            >
              Status
            </Typography>
            <Box
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title="In Progress">
                <Checkbox
                  className={`${classes.checkbox} ${classes.inProgress}`}
                  defaultChecked
                  color="secondary"
                />
              </Tooltip>

              <Tooltip title="Cancelled">
                <Checkbox
                  color="error"
                  className={`${classes.checkbox} ${classes.cancelled}`}
                />
              </Tooltip>
              <Tooltip title="Ended">
                <Checkbox className={`${classes.checkbox} ${classes.ended}`} />
              </Tooltip>
            </Box>
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
