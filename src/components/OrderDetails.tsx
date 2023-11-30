import React from "react";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Order, selectOrder } from "../store/order/orderSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

interface OrderDetailsProps {
  selectedOrder: Order;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({
  selectedOrder,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        paddingLeft: "6%",
        paddingRight: "5%",
      }}
    >
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Typography
          color="inherit"
          onClick={() => {
            dispatch(selectOrder(null))
            navigate("/Orders");
          }}
        >
          Order
        </Typography>
        <Typography color="textPrimary" fontWeight="bold">
          {selectedOrder.orderId}
        </Typography>
      </Breadcrumbs>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Typography variant="h5" color="textPrimary" fontWeight="bold">
          Order Number: {selectedOrder.orderId}
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "10px" }}
            onClick={() => {
                dispatch(selectOrder(null))
              navigate("/Orders");
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "10px" }}
          >
            Approve Order
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
