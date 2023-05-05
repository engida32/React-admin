import { Box } from "@mui/material";
import React from "react";

const CustomComponent = ({ theme }) => (
  <Box
    sx={{
      display: "flex",
      margin: "auto",
    }}
  >
    This component has a background color that changes based on the current
    theme.
  </Box>
);

export default CustomComponent;
