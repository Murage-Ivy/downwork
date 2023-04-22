import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from './reducers/SignupSlice'
import logginReducer from './reducers/LoginSlice'


export const store = configureStore({
    reducer: {
        // Add your reducers here
        signUpUser: signUpReducer,
        loggedUser: logginReducer

    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch