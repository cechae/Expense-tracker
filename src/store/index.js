import { changeName, changeAmount, formReducer } from './slices/formSlice';
import {
  addExpense,
  expenseReducer,
  changeSearchTerm,
} from './slices/expenseSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    form: formReducer,
    expense: expenseReducer,
  },
});

export { store, changeName, changeAmount, addExpense, changeSearchTerm };
