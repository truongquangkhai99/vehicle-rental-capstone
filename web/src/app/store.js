import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from './slice/userSlice'
import pageReducer from './slice/pageSlice'
import seacrhReducer from './slice/searchSlice'
const store = configureStore({
    reducer: {
        logged: loggedReducer,
        isAdmin: pageReducer,
        searched: seacrhReducer
    },
})
export default store;