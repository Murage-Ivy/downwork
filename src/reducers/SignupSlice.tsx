import { createSlice } from "@reduxjs/toolkit";

type initalStateType = {
    user: {
        email: string,
        password: string,
        password_confirmation: string,
        username: string,
        image: string
    },
    status: string,
    error: string[],
    success: boolean
}

const initialState = {

    user: {
        email: "",
        password: "",
        password_confirmation: "",
        username: "",
        image: ""

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