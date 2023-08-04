import {configureStore} from '@reduxjs/toolkit';
import {selectedOrderSlice} from "./slices/selectedOrder/selected-order-slice";
import {ordersSlice} from "./slices/orders/orders-slice";
import {productsSlice} from "./slices/products/products-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        selectedOrder: selectedOrderSlice,
        orders: ordersSlice,
        products: productsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
