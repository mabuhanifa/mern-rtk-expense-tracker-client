import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  transaction: [],
};
export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
});
