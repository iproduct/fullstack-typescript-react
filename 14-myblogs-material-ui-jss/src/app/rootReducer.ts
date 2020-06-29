import { combineReducers } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice';

const rootReducer = combineReducers({
  posts: postsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
