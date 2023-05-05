import React from "react";
import {
  Box,
  Card,
  CardContent,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";

export const CustomCard = ({ icon, stat, label }) => {
  return (
    <Card
      style={{
        background: "primary",
        color: "primary.contrastText",
        width: 300,
        height: 150,
        margin: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          <CheckCircleOutlineIcon
            icon={icon}
            style={{
              color: "#00ff00",
              marginRight: 1,
            }}
          />
          {stat}
        </Typography>
        <Typography color="textSecondary">
          <IconButton
            style={{
              color: " primary.contrastText",
              marginRight: 2,
            }}
          >
            <LabelImportantIcon color="primary " />
          </IconButton>
          {label}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 1,
        }}
      >
        <DownloadDoneIcon
          color="primary"
          sx={{
            marginRight: 1,
          }}
        />
        <Typography variant="body2" component="p">
          {stat}
        </Typography>
      </Box>
    </Card>
  );
};

export default CustomCard;
