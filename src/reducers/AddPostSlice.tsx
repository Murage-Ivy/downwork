import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IntialsPostType, PostTypeProps } from "../types"

export const addPost = createAsyncThunk('add/post', async (post: PostTypeProps, thunkAPI) => {
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
    success: false
}

export const addPostSlice = createSlice({
    name: 'addPost',
    initialState,
    reducers: {
        resetSuccess: (state) => {
            state.success = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addPost.pending, (state, _) => {
                state.status = 'loading'
            })
            .addCase(addPost.fulfilled, (state, action: PayloadAction<PostTypeProps>) => {
                state.status = 'success'
                state.posts.push(action.payload)
                state.success = true
                state.error = []
            })
            .addCase(addPost.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed'
                state.error = action.payload
                state.success = false
            })
    }

})

export default addPostSlice.reducer

