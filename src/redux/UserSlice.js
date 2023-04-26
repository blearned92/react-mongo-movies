import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        firstname: null, 
        lastname: null, 
        username: null, 
        role: null, 
        token: null
    },
    reducers: {
        setUser:(state, action)=>{
            const {firstname, lastname, username, role} = action.payload;
            state.username = username;
            state.firstname = firstname;
            state.lastname = lastname;
            state.role = role;
        },
        setToken:(state, action)=>{
            const {token} = action.payload;
            state.token = token;
        }
    }
})

export const selectUser = (state) => state.user;
export const selectUsername = (state) => state.user.username;
export const {setUser, setToken} = UserSlice.actions;
export default UserSlice.reducer;