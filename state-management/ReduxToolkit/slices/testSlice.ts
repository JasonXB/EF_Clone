import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  // INITIAL STATE OBJECT (state values present on startup)
  // Can view these state values via the useSelector method Redux provides
  initialState: {
    counterValue: 0,
    showCounter: true,
  },
  // REDUCER METHODS:
  // Can change 1 or multiple values, and can even use input parameters
  // Methods are called inside React components via the useDispatch method Redux provides
  reducers: {
    increment: (state) => {
      state.counterValue++; // no input parameters needed
    },
    decrement: (state) => {
      state.counterValue--; // no input parameters needed
    },
    incrementMore: (state, action: { payload: number }) => {
      state.counterValue = state.counterValue + action.payload;
      // this method requires a numeric input value
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
