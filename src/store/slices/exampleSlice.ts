import { createSlice } from "@reduxjs/toolkit";

interface ExampleState {
  value: number;
}

const initialState: ExampleState = {
  value: 0,
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
  selectors: {
    selectValue: (state) => state.value,
  },
});

export const { increment, decrement, reset } = exampleSlice.actions;
export const { selectValue } = exampleSlice.selectors;
export default exampleSlice.reducer;
