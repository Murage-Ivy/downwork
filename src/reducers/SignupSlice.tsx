import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormDataType, initalStateType } from "../types";



export const addUser = createAsyncThunk('add/users', async (user: FormDataType, thunkAPI) => {
    console.log(user)
    const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
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
        password: "",
        password_confirmation: "",
        username: "",
        image_url: ""

    },
    status: "idle",
    error: [],
    success: false
}

export const signSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        reset: (state) => {
            state.success = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state, _) => {
                state.status = "loading"


            })
            .addCase(addUser.fulfilled, (state, action: PayloadAction<FormDataType>) => {
                state.status = "succeeded"
                state.user = action.payload
                state.success = true
                state.error = []
            })

            .addCase(addUser.rejected, (state, action: PayloadAction<any>) => {
                state.status = "failed"
                state.error = action.payload
            })
    }
});

export default signSlice.reducer;
export const { reset } = signSlice.actions;

