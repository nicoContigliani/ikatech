import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jsonShoes from '../../zapato.json'


const initialState = {
    shoes: [],
    shoesSelected: [],
    value: 0,
    status: 'idle',
};

export const shoesSlice = createSlice({
    name: 'shoes',
    initialState,

    incrementByAmount: (state, action) => {
        state.value += action.payload;
      },

})
export const {  incrementByAmount } = shoesSlice.actions;

export const selectShoes = (state) => state.shoes;



export default shoesSlice.reducer;
