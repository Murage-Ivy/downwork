import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from './reducers/SignupSlice'
import logginReducer from './reducers/LoginSlice'
import addPostReducer from './reducers/AddPostSlice'
import addCommentReducer from './reducers/CommentSlice'


export const store = configureStore({
    reducer: {
        // Add your reducers here
        signUpUser: signUpReducer,
        loggedUser: logginReducer,
        addPost: addPostReducer,
        addComment: addCommentReducer

    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch