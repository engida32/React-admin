import React from "react";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";

export const CustomCard = ({ icon, stat, label, total }) => {
  return (
    <Card
      sx={{
        background: "primary",
        color: "text.primary",
        width: 300,
        height: 150,
        boxShadow:
          "0px 2px 4px rgba(0, 0, 0.5, 3.25), 0px 4px 8px rgba(0, 0, 0, 0.15), 0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.05)",
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
          {total}
        </Typography>
      </Box>
    </Card>
  );
};

export default CustomCard;
