import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const authSlice = createSlice({
    name: ' auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => { //pass user in as action, and set it as use info state, then set to local storage
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    }
});

//when you call, ie setCredentials that's an action, when it changes state, that's the reducer

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer;