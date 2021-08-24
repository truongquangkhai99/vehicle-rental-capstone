import { createSlice } from '@reduxjs/toolkit';
// import Cookies from 'universal-cookie';


// const cookies = new Cookies();
// const token = cookies.get('token');


const blogSlice = createSlice({
    name: 'blog',
    initialState: { status: true, data: {} },
    reducers: {
        createBlog: (state, action) => {
            state.data = action.payload
        }
    },
})
const { reducer, actions } = blogSlice;
export const { createBlog } = actions;
export default reducer;