import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type CommentPropsType = {
    id: number,
    content: String,
    post_id: number
}

export const addComment = createAsyncThunk('add/comment', async (comment: CommentPropsType, thunkAPI) => {
    const response = await fetch(`comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    const data = await response.json()
    if (response.ok) {
        return data
    }
    else {
        return thunkAPI.rejectWithValue(data.errors)
    }

})

type CommentInitailTypeState = {
    comments: CommentPropsType[],
    errors: string[],
    status: string
}
const initialState: CommentInitailTypeState = {
    comments: [],
    errors: [],
    status: "idle",

}



export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(addComment.pending, (state, _) => {
                state.status = "loading"
            })

            .addCase(addComment.fulfilled, (state, action: PayloadAction<CommentPropsType>) => {
                state.status = "success"
                state.comments.unshift(action.payload)
            })
            .addCase(addComment.rejected, (state, action: PayloadAction<any>) => {
                state.status = "failed"
                state.errors = action.payload
            })
    }

})
