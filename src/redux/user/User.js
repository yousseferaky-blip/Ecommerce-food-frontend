import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName:"",
    lastName:"",
    email:"",
    avatar:"",
    password:"",
    confirmPassword:"",
    role:"",
    _id:"",
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signIn: (state,action)=>{
            const { firstName, lastName, email, avatar, _id, password, confirmPassword, role } = action.payload.data;
            state.firstName = firstName
            state.lastName = lastName
            state.email = email
            state.avatar = avatar
            state.password = password
            state.confirmPassword = confirmPassword
            state.role = role
            state._id = _id
        },
        logOut: (state,action)=>{
            state.firstName = ''
            state.lastName = ''
            state.email = ''
            state.avatar = ''
            state.password = ''
            state.confirmPassword = ''
            state.role = ''
            state._id = ''
        }
    }
})

export const {signIn , logOut} = userSlice.actions
export default userSlice.reducer;