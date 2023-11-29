import React from "react";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface OrderDetailsProps {
  orderNumber: string;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({ orderNumber }) => {
  return (
    <Box sx={{ backgroundColor: "white", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",paddingLeft: "6%", paddingRight: "5%" }}>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Typography color="inherit">
          Order
        </Typography>
        <Typography color="textPrimary" fontWeight="bold">
          Order {orderNumber}
        </Typography>
      </Breadcrumbs>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px" }}>
        <Typography variant="h5" color="textPrimary" fontWeight="bold">
          Order Number: {orderNumber}
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined" color="primary" sx={{ borderRadius: "10px" }}>
            Back
          </Button>
          <Button variant="contained" color="primary" sx={{ borderRadius: "10px" }}>
            Approve Order
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
