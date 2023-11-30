// orderSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchOrders } from "./orderAsyncThunk";

export interface Order {
  orderId: string;
  supplier: string;
  shippingDate: string;
  total: number;
  category: string[];
  department: string | number;
  status: string;
}

interface OrderState {
  orders: Order[];
  selectedOrder: Order | null;
}

const initialState: OrderState = {
  orders: [],
  selectedOrder: null,
};
  
export const orderSlice = createSlice({
    name: "Order",
    initialState,
    reducers: {
      setOrders: (state, action: PayloadAction<Order[]>) => {
        state.orders = action.payload;
      },
      selectOrder: (state, action: PayloadAction<Order|null>) => {
        state.selectedOrder = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchOrders.fulfilled, (state, action) => {
        // Call the setOrders reducer with the payload received from the async thunk
        state.orders = action.payload;
      });
    },
  });

export const { setOrders, selectOrder } = orderSlice.actions;
export default orderSlice.reducer;

export const selectOrders = (state: RootState) => state.order.orders;
export const selectSelectedOrder = (state: RootState) => state.order.selectedOrder;
