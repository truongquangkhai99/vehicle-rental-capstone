import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from './slice/headerSlice'

const rootReducer ={
    logged: loggedReducer,
}
const store = configureStore({
    reducer: rootReducer,
})
export default store;