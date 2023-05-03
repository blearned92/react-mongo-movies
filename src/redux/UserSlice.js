import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        firstname: null, 
        lastname: null, 
        username: null, 
        role: null, 
        accesstoken: null,
        refreshtoken: null
    },
    reducers: {
        setUser:(state, action)=>{
            const {firstname, lastname, username, role, accesstoken, refreshtoken} = action.payload;
            state.username = username;
            state.firstname = firstname;
            state.lastname = lastname;
            state.role = role;
            state.accesstoken = accesstoken;
            state.refreshtoken = refreshtoken
        }
    }
})

export const selectUser = (state) => state.user;
export const selectUsername = (state) => state.user.username;
export const {setUser} = UserSlice.actions;
export default UserSlice.reducer;