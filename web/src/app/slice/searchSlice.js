import { createSlice } from '@reduxjs/toolkit';
const searchSlice = createSlice({
    name: 'searched',
    initialState: JSON.parse(localStorage.getItem('searchInput')),
    reducers: {
        search: (state, action) => {
            const res = action.payload;
            const searchInput = {
                startLocal: res.startLocal,
                startDate: res.startDate,
                startTime: res.startTime,
                endLocal: res.endLocal,
                endDate: res.endDate,
                endTime: res.endTime,
                selfDrive: res.selfDrive,
                withDrive: res.withDrive,
                intercityCar: res.intercityCar
            }
            state.data = searchInput;
        }
    },
})
const { reducer, actions } = searchSlice;
// export const { } = actions;
export default reducer;