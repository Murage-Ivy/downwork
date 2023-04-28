import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type UserType = {
    id: number,
    username: string,
    email: string,
    image_url: string
}
type CommentPropsType = {
    id: number,
    content: string,
    post_id: number
    user?: UserType
}


export const fetchComments = createAsyncThunk('fetch/Comments', async (_,thunkAPI) => {
    const response = await fetch(`comments`, {
    })
    const data = await response.json()
    if (response.ok) {
        return data
    }
})
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

export const deleteComment = createAsyncThunk('delete/comment', async (commentId: number) => {
   await fetch(`comments/${commentId}`, {
        method: 'DELETE'
    })
    return commentId
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
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchComments.pending, (state, _) => {
                state.status = "loading"
            })
            .addCase(fetchComments.fulfilled, (state, action: PayloadAction<CommentPropsType[]>) => {
                state.status = "success"
                state.comments = action.payload
            })
            .addCase(fetchComments.rejected, (state, action: PayloadAction<any>) => {
                state.status = "failed"
                state.errors = action.payload
            })
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
            .addCase(deleteComment.pending, (state, _) => {
                state.status = "loading"
            }
            )
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.status = "success"
                state.comments = state.comments.filter(comment => comment.id !== action.payload)

            }
            )
            .addCase(deleteComment.rejected, (state, action: PayloadAction<any>) => {
                state.status = "failed"
                state.errors = action.payload
            }
            )
    }

})

export default commentSlice.reducer
