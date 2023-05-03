import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IntialsPostType, PostTypeProps, PostTypes } from "../types"

type UpdateProps = {
    postId: number,
    likes: number
}
export const addPost = createAsyncThunk('add/post', async (post: PostTypes, thunkAPI) => {
    const response = await fetch('posts', {
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


export const deletePosts = createAsyncThunk('delete/posts', async (postId: number) => {
    const response = await fetch(`posts/${postId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        return postId
    }
})



export const updateLikes = createAsyncThunk('likes/post', async (newValues: UpdateProps) => {
    const response = await fetch(`/posts/${newValues.postId}/likes`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes: newValues.likes })
    })
    const data = await response.json()
    if (response.ok) {
        console.log(newValues.likes)
        console.log(data)
        return data
    }
})

export const fetchPosts = createAsyncThunk('fetch/posts', async (category: String) => {
    const response = await fetch(`posts?category=${category.toLowerCase()}`)
    const data = await response.json()
    if (response.ok) {
        return data
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
                state.posts.unshift(action.payload)
                state.success = true
                state.error = []
            })
            .addCase(addPost.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed'
                state.error = action.payload
                state.success = false
            })
            .addCase(fetchPosts.pending, (state, _) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostTypeProps[]>) => {
                state.status = "success"
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, _) => {
                state.status = 'failed'
            })
            .addCase(deletePosts.pending, (state, _) => {
                state.status = 'loading'
            }
            )
            .addCase(deletePosts.fulfilled, (state, action) => {
                state.status = 'success'
                state.posts = state.posts.filter(post => post.id !== action.payload)
            }
            )
            .addCase(deletePosts.rejected, (state, _) => {
                state.status = 'failed'
            }
            )
            .addCase(updateLikes.pending, (state, _) => {
                state.status = 'loading'
            })
            .addCase(updateLikes.fulfilled, (state, action) => {
                state.status = 'success'
                const post = state.posts.find(post => post.id === action.payload.id)
                if (post) {
                    post.likes = action.payload.likes
                }
            })
            .addCase(updateLikes.rejected, (state, _) => {
                state.status = 'failed'
            }
            )
    }

})



export const { resetSuccess } = addPostSlice.actions
export default addPostSlice.reducer

