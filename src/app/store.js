import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import shoesReducer from '../features/shoes/shoeSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
     shoes: shoesReducer
  },
});
