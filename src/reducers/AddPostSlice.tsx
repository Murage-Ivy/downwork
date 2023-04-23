import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IntialsPostType, PostTypeProps } from "../types"

const addPost = createAsyncThunk('add/post', async (post, thunkAPI) => {
    const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    const data = await response.json()
    if (response.ok) {
        return data
    }
    else {
        return thunkAPI.rejectWithValue(data.errors)
    }

})
const initialState: IntialsPostType = {
    posts: [],
    status: 'idle',
    error: [],
    succcess: false
}

export const addPostSlice = createSlice({
    name: 'addPost',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addPost.pending, (state, _) => {
                state.status = 'loading'
            })
            .addCase(addPost.fulfilled, (state, action: PayloadAction<PostTypeProps>) => {
                state.status = 'success'
                state.posts.push(action.payload)
                state.succcess = true
                state.error = []
            })
            .addCase(addPost.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed'
                state.error = action.payload
                state.succcess = false
            })
    }

})

