import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomCard from "./CustomCard";
// for customCard component generate a random number for the stat prop
const data = [
  { id: 1, stat: 123456789, label: "This is a test label" },
  { id: 2, stat: 987654321, label: "This is a test label" },
  { id: 3, stat: 123456789, label: "This is a test label" },
  { id: 4, stat: 987654321, label: "This is a test label" },
  { id: 5, stat: 123456789, label: "This is a test label" },
  { id: 6, stat: 987654321, label: "This is a test label" },
  { id: 7, stat: 123456789, label: "This is a test label" },
  { id: 8, stat: 987654321, label: "This is a test label" },
  { id: 9, stat: 123456789, label: "This is a test label" },
  { id: 10, stat: 987654321, label: "This is a test label" },
];
const CustomComponent = ({ theme }) => (
  <Box
    sx={{
      display: "flex",
      mx: "auto",
      my: 3,
    }}
  >
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <CustomCard stat={item.stat} label={item.label} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default CustomComponent;
