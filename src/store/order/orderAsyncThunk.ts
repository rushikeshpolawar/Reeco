// orderAsyncThunk.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { setOrders } from "./orderSlice";
import { orderDetails } from "../../data/orderDetails";


export const fetchOrders:any = createAsyncThunk(
    'order/fetchOrders',
    async () => {
      // Simulating async data fetching
      console.log(orderDetails);
      setOrders(orderDetails)
      return orderDetails;
    }
  );
