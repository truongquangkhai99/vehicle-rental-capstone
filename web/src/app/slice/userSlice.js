import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';


const cookies = new Cookies();
const token = cookies.get('token');

const userSlice = createSlice({
    name: 'logged',
    initialState: { status: 'idle', data: token, error: {},show:false },
    reducers: {
        logout: (state) => {
            cookies.remove('token', { path: '/' });
            state.data = null;
        },
        login: (state, action) => {
            const res = action.payload;
            const token = {
                accessToken: res.accessToken,
                fullName: res.fullName,
                avatarLink: res.avatarLink,
                role: res.role,
                emailVerify: res.emailVerify
            }
            state.data = token;
            cookies.set("token", token, { path: "/", maxAge: 3153600000 });

        },
        verifySuccess: (state) => {
            const token = state.data;
            token.emailVerify = true;
            cookies.set("token", token, { path: "/", maxAge: 3153600000 });
        },
        showLogin: (state) => {
            state.show=true;
        },
        closeLogin: (state) => {
            state.show=false;
        },

    },
})
const { reducer, actions } = userSlice;
export const {showLogin,closeLogin, logout, login, verifySuccess } = actions;
export default reducer;