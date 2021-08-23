import { createSlice } from '@reduxjs/toolkit';
const searchSlice = createSlice({
    name: 'searched',
    initialState: { status: "idle", data: JSON.parse(localStorage.getItem('searchInput')), error: {} },
    reducers: {
        search: (state, action) => {
            state.data = action.payload;
            localStorage.setItem("searchInput", JSON.stringify(state.data));
        },
        changeEndDate: (state, action) => {
            state.data.endDate = action.payload;
            localStorage.setItem("searchInput", JSON.stringify(state.data));
        },
        changeEndTime: (state, action) => {
            state.data.endTime = action.payload;
            localStorage.setItem("searchInput", JSON.stringify(state.data));
        },
        changeStartDate: (state, action) => {
            state.data.startDate = action.payload;
            localStorage.setItem("searchInput", JSON.stringify(state.data));
        },
        changeStartTime: (state, action) => {
            state.data.startTime = action.payload;
            localStorage.setItem("searchInput", JSON.stringify(state.data));
        },
        changeTime: (state, action) => {
            state.data.time = action.payload;
            localStorage.setItem("searchInput", JSON.stringify(state.data));
        },
    },
})
const { reducer, actions } = searchSlice;
export const { search,changeEndDate,changeEndTime,changeStartDate,changeStartTime,changeTime} = actions;
export default reducer;