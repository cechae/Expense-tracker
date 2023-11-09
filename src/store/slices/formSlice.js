import { createSlice } from '@reduxjs/toolkit';
import { addExpense } from '../index';
const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    amount: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeAmount(state, action) {
      state.amount = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addExpense, (state, action) => {
      state.name = '';
      state.amount = 0;
    });
  },
});
export const { changeName, changeAmount } = formSlice.actions;
export const formReducer = formSlice.reducer;
