import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedOrderState {
  selected: number | null;
}

const initialState: SelectedOrderState = {
  selected: null,
};

const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<number>) => {
      state.selected = action.payload;
    },

    unselect: (state) => {
      state.selected = null;
    },
  },
});

export const { select, unselect } = order.actions;
export const selectedOrderSlice = order.reducer;
