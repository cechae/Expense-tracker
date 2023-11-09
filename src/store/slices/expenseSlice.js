import { createSlice, nanoid } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    data: [],
  },
  reducers: {
    addExpense(state, action) {
      state.data.push({
        name: action.payload.name,
        amount: action.payload.amount,
        id: nanoid(),
        //time: TODO
      });
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export const expenseReducer = expenseSlice.reducer;
