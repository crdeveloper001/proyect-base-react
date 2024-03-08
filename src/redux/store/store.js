import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Slices/counterReducer';

const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})

export default store;