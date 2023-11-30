import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

export const WelcomePage: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade in after component mounts
    setFadeIn(true);
  }, []);

  return (
    <Box sx={{ textAlign: "center", marginTop: "100px" }}>
      <Typography
        variant="h2"
        sx={{
          opacity: fadeIn ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
        Welcome to Reeco
      </Typography>
      {/* Add any additional elements or animations here */}
    </Box>
  );
};