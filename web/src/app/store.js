import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from './slice/userSlice'
import pageReducer from './slice/pageSlice'
import seacrhReducer from './slice/searchSlice'
import registerReducer from './slice/registerSlice'
import bookingReducer from './slice/bookingSlice'
const store = configureStore({
    reducer: {
        logged: loggedReducer,
        isAdmin: pageReducer,
        searched: seacrhReducer,
        register: registerReducer,
        booking: bookingReducer,
    },
})
export default store;