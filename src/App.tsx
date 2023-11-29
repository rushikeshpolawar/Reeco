import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { ReccoAppBar } from "./components/ReccoAppBar";

import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <Box sx={{ width: "100%" }}>
      <ReccoAppBar />
      <Box sx={{ padding: "2rem" }}>
        <MainLayout />
      </Box>
    </Box>
  );
}

export default App;
