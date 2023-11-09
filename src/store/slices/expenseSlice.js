import { createSlice, nanoid } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    data: [],
    searchTerm: '',
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
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addExpense, changeSearchTerm } = expenseSlice.actions;
export const expenseReducer = expenseSlice.reducer;
