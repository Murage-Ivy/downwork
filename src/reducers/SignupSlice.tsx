import { createSlice } from "@reduxjs/toolkit";

type initalStateType = {
    user: {
        email: string,
        password: string
    },
    status: string,
    error: string[],
    success: boolean
}

const initialState = {

    user: {
        email: "",
        password: ""
    },
    status: "idle",
    error: [],
    success: false
}

export const signSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {},
    extraReducers: (builder) => { }
});