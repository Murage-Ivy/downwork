import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from './reducers/SignupSlice'


export const store = configureStore({
    reducer: {
        // Add your reducers here
        signUpUser: signUpReducer

    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch