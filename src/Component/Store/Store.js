import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User-Slice";

const store = configureStore({
    reducer:{

        user: userReducer
    }
})

export default store