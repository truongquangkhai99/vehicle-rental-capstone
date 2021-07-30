import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';


const cookies = new Cookies();
const token = cookies.get('token');

const userSlice = createSlice({
    name: 'logged',
    initialState: { status: 'idle', data: token, error: {} },
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
const { reducer, actions } = userSlice;
export const { logout, login, verifySuccess, search } = actions;
export default reducer;