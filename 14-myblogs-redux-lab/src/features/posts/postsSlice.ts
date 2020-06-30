import { Post } from "../../model/post.model";
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AppThunk } from "../../app/store";
import PostService from '../../service/post-service';

interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
} 

interface PostsLoaded {
    posts: Post[];
}

const initialiState: PostsState = {
    posts: [],
    loading: false,
    error: null
}

const posts = createSlice({
    name: 'posts',
    initialState: initialiState,
    reducers: {
        getPostsStart(state) {
            state.loading = true;
            state.error = null;
        },
        getPostsSuccess(state, action: PayloadAction<PostsLoaded>) {
            const {posts} = action.payload;
            state.posts = posts;
            state.loading = false;
            state.error = null;
        },
        postsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    getPostsStart,
    getPostsSuccess,
    postsFailure  
} = posts.actions;

export default posts.reducer;

export const fetchPosts = (): AppThunk => async(dispatch) => {
    try {
        dispatch(getPostsStart());
        const posts = await PostService.getAllPosts();
        dispatch(getPostsSuccess({posts}));
    } catch(err){
        dispatch(postsFailure(err));
    }
};