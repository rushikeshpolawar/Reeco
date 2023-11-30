import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReccoAppBar } from "./components/ReccoAppBar";
import { OrderPage } from "./pages/OrderPage";
import { StorePage } from "./pages/StorePage";
import { WelcomePage } from "./pages/WelcomePage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { OrderDetails } from "./components/OrderDetails";
import { useSelector } from "react-redux";
import { selectSelectedOrder } from "./store/order/orderSlice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Green color
    },
  },
});

export const App = () => {
  
  const selectedOrder = useSelector(selectSelectedOrder);

  const onDemandLoad = () => {
    return (
      <>
        <ReccoAppBar />
        {selectedOrder && <OrderDetails selectedOrder={selectedOrder} />}

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          {/* Render the store component here */}
          <Route path="/Store" element={<StorePage />} />

          {/* If selectedOrder is null, show OrderList, else show ProductList */}
          <Route path="/Orders" element={<OrderPage />} />

          {/* Render the analytics component here */}
          <Route path="/Analytics" element={<AnalyticsPage />} />
        </Routes>
      </>
    );
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <MainLayout /> */}
        {onDemandLoad()}
      </ThemeProvider>
    </>
  );
};
