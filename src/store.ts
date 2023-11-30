// store.ts

import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./store/order/orderSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
