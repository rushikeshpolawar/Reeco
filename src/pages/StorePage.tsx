import React from "react";
import { Paper, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StorePage: React.FC = () => {
  return (
    <Paper
      sx={{
        margin: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        animation: `${fadeIn} 1.5s ease-in-out`, // Apply fade-in animation
      }}
    >
      <Typography variant="h5">Store Page</Typography>
      <Typography sx={{ marginTop: 2, color: "gray" }}>
        This page is under construction. Stay tuned for updates!
      </Typography>
    </Paper>
  );
};

