import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token =cookies.get('_token')||{};
//Quản lý state check login cho header để hiển thị avatar và tên
const loggedHeaderSlice = createSlice({
    name: 'logged',
    initialState: { fullName: token.fullName, avatarLink: token.avatarLink},
    reducers: {
        login: (state, action) => {
            state.fullName = action.payload.fullName;
            state.avatarLink = action.payload.avatarLink;
        },
        logout: (state) => {
            cookies.remove('_token');
            state.fullName="";
            state.avatarLink="";
        }
    }
})
const { reducer, actions } = loggedHeaderSlice;
export const { login, logout } = actions;
export default reducer;