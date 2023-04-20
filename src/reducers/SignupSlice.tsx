import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormDataType } from "../types";



export const addUser = createAsyncThunk('add/users', async (user: FormDataType, thunkAPI) => {
    const response = await fetch("https://api.cloudinary.com/v1_1/dhpmstfkj/image/upload", {
        method: "POST",
        headers: { accept: 'application/json' },
        body: JSON.stringify(user)

    })
    const data = await response.json()
    if (response.ok) {
        return data
    }
    else {
        return thunkAPI.rejectWithValue(data.errors)
    }
})

type initalStateType = {
    user: FormDataType,
    status: string,
    error: string[],
    success: boolean
}

const initialState: initalStateType = {

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
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state, _) => {
                state.status = "loading"


            })
            .addCase(addUser.fulfilled, (state, action: PayloadAction<FormDataType>) => {
                state.status = "succeeded"
                state.user = action.payload
                state.success = true
            })

            .addCase(addUser.rejected, (state, action: PayloadAction<any>) => {
                state.status = "failed"
                state.error = action.payload
            })
    }
});