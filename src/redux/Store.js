import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/UserSlice";
import errorReducer from "../redux/ErrorSlice";
import movieReducer from "../redux/MovieSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        error: errorReducer
    }
});