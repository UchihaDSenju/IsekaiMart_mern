// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file.
// Reducers are functions that take the current state and an action as arguments, and return a new state result.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;// In our case it is the json that we receive from mongodb through the server(data)
            state.loading = false;
            state.error = null;
        },
        signInError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {signInStart, signInSuccess, signInError} = userSlice.actions;// to use the reducers
export default userSlice.reducer;// You can import the reducer from here with whatever name you want

