/**
 * THIS HEADER SHOULD BE KEPT INTACT IN ALL CODE DERIVATIVES AND MODIFICATIONS.
 * 
 * This file provided by IPT is for non-commercial testing and evaluation
 * purposes only. IPT reserves all rights not expressly granted.
 *  
 * The security implementation provided is DEMO only and is NOT intended for production purposes.
 * It is exclusively your responsisbility to seek advice from security professionals 
 * in order to secure the REST API implementation properly.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * IPT BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

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