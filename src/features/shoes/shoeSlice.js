import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jsonShoes from '../../zapato.json'


const initialState = {
    shoes: [jsonShoes],
    shoesSelected: [],
    shoesShow: [],
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
    }
})
export const { showImage } = shoesSlice.actions;

export const selectShoes = (state) => state.shoes;



export default shoesSlice.reducer;
