import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products as givenProducts } from '../../api/data';
import { Product } from '../../../types';

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: givenProducts,
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },

    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
  },
});

export const { addProduct, deleteProduct } = products.actions;
export const productsSlice = products.reducer;
