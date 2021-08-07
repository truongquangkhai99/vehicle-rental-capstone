import { createSlice } from '@reduxjs/toolkit';
const searchSlice = createSlice({
    name: 'searched',
    initialState: { status: "idle", data: JSON.parse(localStorage.getItem('searchInput')), error: {} },
    reducers: {
        search: (state, action) => {
            state.data = action.payload;
            sessionStorage.setItem("searchInput", JSON.stringify(state.data));
        }
    },
})
const { reducer, actions } = searchSlice;
export const { search } = actions;
export default reducer;