import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/UserSlice";
import errorReducer from "../redux/ErrorSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        error: errorReducer
    }
});