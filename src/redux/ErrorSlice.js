import { createSlice } from "@reduxjs/toolkit";

const ErrorSlice = createSlice({
    name: "error",
    initialState: {loginError: null},
    reducers: {
        setLoginError:(state, action)=>{
            const {error} = action.payload;
            state.loginError = error;
        }
    }
})

export const selectLoginError = (state) => state.user.loginError;
export const {setLoginError} = ErrorSlice.actions;
export default ErrorSlice.reducer;