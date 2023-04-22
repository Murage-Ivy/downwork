import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormDataType, LoggedUserType } from "../types";
type initalStateType = {
    user: LoggedUserType
    status: string,
    error: string[],
    success: boolean


}
export const loginUser = createAsyncThunk('login/user', async (user: LoggedUserType, thunkAPI) => {
    const response = await fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
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
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, _) => {
                state.status = "loading"
            })

            .addCase(loginUser.fulfilled, (state, action: PayloadAction<FormDataType>) => {
                state.status = "success"
                state.user = action.payload
                state.success = true
                state.error = []
            })
            .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
                state.status = "failed"
                state.error = action.payload
                state.success = false
            })
    }
})

export default loginSlice.reducer
