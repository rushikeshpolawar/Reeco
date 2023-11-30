import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Typography, Divider } from "@mui/material";
import { Order, selectOrder, selectOrders, selectSelectedOrder } from "../store/order/orderSlice";
import { fetchOrders } from "../store/order/orderAsyncThunk";


interface OrderContainerProps {
  isApproved: boolean;
}

// Assuming this is your Order type

  
const OrderContainer = styled.div<OrderContainerProps>`
  margin-bottom: 10px;
  cursor: ${(props: { isApproved: any; }) => (props.isApproved ? "not-allowed" : "pointer")};
  opacity: ${(props: { isApproved: any; }) => (props.isApproved ? 0.7 : 1)};
`;

export const OrderList: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const selectedOrder = useSelector(selectSelectedOrder);

  const [sortedOrders, setSortedOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Fetch orders on component mount
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    // Sort orders based on priority (Date, status)
    const sorted = [...orders].sort((a, b) => {
      // Priority 1: Status (not approved first)
      if (a.status !== "Approved" && b.status === "Approved") return -1;
      if (a.status === "Approved" && b.status !== "Approved") return 1;

      // Priority 2: Date (latest first)
      return new Date(b.shippingDate).getTime() - new Date(a.shippingDate).getTime();
    });

    setSortedOrders(sorted);
  }, [orders]);

  const handleOrderClick = (seletedOrder: Order) => {
    // Navigate to the detailed order view
    dispatch(selectOrder(seletedOrder))
    // history.push(`/order-details/${orderId}`);
  };

  return (
    <Paper
      sx={{
        margin: "10px",
        padding: "16px",
        height:"85vh",
        overflowY:"scroll"
      }}
    >
      <Typography variant="h6">Order List</Typography>
      {sortedOrders.map((order, index) => (
        <React.Fragment key={order.orderId}>
          <OrderContainer isApproved={selectedOrder?.status === "Approved"}>
            <div onClick={() => handleOrderClick(order)}>
              <Typography>
                Order ID: {order.orderId}, Status: {order.status}
              </Typography>
              <Typography>
                Shipping Date: {order.shippingDate}, Total: {order.total}
              </Typography>
            </div>
          </OrderContainer>
          {index < sortedOrders.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Paper>
  );
};


