import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReccoAppBar } from "./components/ReccoAppBar";

import { MainLayout } from "./components/MainLayout";
import { BreadcrumbsUI } from "./components/BreadcrumbsUI";
import { OrderDetails } from "./components/OrderDetails";

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green color
    },
  },
});

export const App =() => {
  return (
    <Box sx={{ width: "100%" }}>
      <ReccoAppBar />
      <OrderDetails orderNumber={"Order 123ABC"}/>
      <Box sx={{ padding: "2rem" }}>
        <MainLayout />
      </Box>
    </Box>
  );
}