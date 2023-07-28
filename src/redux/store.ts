import { configureStore } from '@reduxjs/toolkit';
import {selectedOrderSlice} from "./slices/selectedOrder/selected-order-slice";
import {ordersSlice} from "./slices/orders/orders-slice";
import {productsSlice} from "./slices/products/products-slice";

export const store = configureStore({
  reducer: {
    selectedOrder: selectedOrderSlice,
    orders: ordersSlice,
    products: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
