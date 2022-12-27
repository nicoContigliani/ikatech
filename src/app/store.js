import { configureStore } from '@reduxjs/toolkit';
import shoesReducer from '../features/shoes/shoeSlice';


export const store = configureStore({
  reducer: {
     shoes: shoesReducer
  },
});
