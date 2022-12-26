import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jsonShoes from '../../zapato.json'


const initialState = {
    shoes: [jsonShoes],
    shoesSelected: [],
    shoesShow: [],
    pay:[],
    value: 0,
    status: 'idle',
};

export const shoesSlice = createSlice({
    name: 'shoes',
    initialState,
    reducers: {
        showImage: (state, action) => {
            state.shoesShow = action.payload;
        },
        productForPay: (state, action) => {
            state.shoesSelected = action.payload;
        },
        Pays: (state, action) => {
            state.shoesPay = action.payload;
        },
    }
})
export const { showImage,productForPay } = shoesSlice.actions;

export const selectShoes = (state) => state.shoes;



export default shoesSlice.reducer;
