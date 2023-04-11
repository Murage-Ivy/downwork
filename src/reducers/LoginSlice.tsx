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

const initialState: initalStateType = {
    user: {
        email: "",
        password: ""
    },
    status: "idle",
    error: [],
    success: false

}
export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => { }
})
