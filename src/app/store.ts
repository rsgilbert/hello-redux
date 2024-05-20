import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer
    }

})

export type MyRootState = ReturnType<typeof store.getState>

// inferred type: { posts: PostsState, comments: CommentsState, users: UsersState }
export type AppDispatch = typeof store.dispatch 






