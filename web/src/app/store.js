import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from './slice/userSlice'
import pageReducer from './slice/pageSlice'

const store = configureStore({
    reducer: {
        logged: loggedReducer,
        isAdmin: pageReducer
    },
})
export default store;