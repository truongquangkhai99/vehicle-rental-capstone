import { createSlice } from '@reduxjs/toolkit';


const bookingSlice = createSlice({
    name: 'booking',
    initialState: { status: true, data: {}, error: [] },
    reducers: {
        addPromotion: (state, action) => {
            state.data.promotion = action.payload;
        },
        removePromotion: (state) => {
            state.data.promotion = null;
        },
    },
})
const { reducer, actions } = bookingSlice;
export const { addPromotion,removePromotion} = actions;
export default reducer;