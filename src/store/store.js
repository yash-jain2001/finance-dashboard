import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";
import roleReducer from "./roleSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    role: roleReducer,
  },
});