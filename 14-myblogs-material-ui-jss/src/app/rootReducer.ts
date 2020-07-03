import { combineReducers } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice';
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
