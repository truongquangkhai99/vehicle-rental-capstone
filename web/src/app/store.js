import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from './slice/userSlice'
import pageReducer from './slice/pageSlice'
import seacrhReducer from './slice/searchSlice'
import blogReducer from './slice/blogSlice'

const store = configureStore({
    reducer: {
        logged: loggedReducer,
        isAdmin: pageReducer,
        searched: seacrhReducer,
        blog: blogReducer
    },
})
export default store;