import { configureStore } from '@reduxjs/toolkit';
import testSliceReducer from './slices/testSlice'; // renamed default export of a Redux slice
const store = configureStore({
  reducer: {
    counter: testSliceReducer,
    // Can add many more slices to the Redux store (store them in the slices folder)
    // A slice is just an individual file dedicated to managing the state of one thing.
    // Ex. Could have  a slice manage auth state, form state...etc
  },
});

export default store;
