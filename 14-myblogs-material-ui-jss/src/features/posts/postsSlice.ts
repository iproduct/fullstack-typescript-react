import { Post } from '../../model/post.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import PostService from '../../service/post-service';
import { IdType } from '../../shared/shared-types';

interface PostsState {
  currentPostId: IdType | null;
  posts: Post[];
  pendingSubmission: boolean;
  loading: boolean;
  error: string | null;
}

interface PostsLoaded {
  posts: Post[];
}

const initialState: PostsState = {
  currentPostId: null,
  posts: [],
  pendingSubmission: false,
  loading: false,
  error: null
}

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsStart(state) {
      state.loading = true
      state.error = null
    },
    getPostsSuccess(state, action: PayloadAction<PostsLoaded>) {
      const { posts } = action.payload;
      state.posts = posts;
      state.loading = false;
      state.error = null;
    },
    postsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    selectPostById(state, action: PayloadAction<IdType>) {
      state.currentPostId = action.payload;
    },
    getPostByIdStart(state, action: PayloadAction<IdType>) {
      state.currentPostId = action.payload;
      state.loading = true;
      state.error = null;
    },
    getPostByIdSuccess(state, action: PayloadAction<Post>) {
      const post = action.payload;
      const index = state.posts.findIndex(p => p._id === post._id);
      if (index < 0) {
        state.posts.push(post)
      } else {
        state.posts[index] = post;
      }
      state.loading = false;
      state.error = null;
    },
    createPostStart(state, action: PayloadAction<Post>) {
      state.pendingSubmission = true;
      state.currentPostId = action.payload._id;
      state.loading = true;
      state.error = null;
    },
    createPostSuccess(state, action: PayloadAction<Post>) {
      const post = action.payload;
      state.posts.push(post)
      state.loading = false;
      state.error = null;
    },
    updatePostStart(state, action: PayloadAction<Post>) {
      state.currentPostId = action.payload._id;
      state.loading = true;
      state.error = null;
    },
    updatePostSuccess(state, action: PayloadAction<Post>) {
      const post = action.payload;
      const index = state.posts.findIndex(p => p._id === post._id);
      if (index < 0) {
        state.posts.push(post)
      } else {
        state.posts[index] = post;
      }
      state.loading = false;
      state.error = null;
    },
    deletePostByIdStart(state, action: PayloadAction<IdType>) {
      state.currentPostId = action.payload;
      state.loading = true;
      state.error = null;
    },
    deletePostByIdSuccess(state, action: PayloadAction<Post>) {
      const post = action.payload;
      const index = state.posts.findIndex(p => p._id === post._id);
      if (index >= 0) {
        state.posts.splice(index, 1);
      }
      state.loading = false;
      state.error = null;
    },
    submissionComplete(state) {
      state.pendingSubmission = false
    },
  }
})

export const {
  getPostsStart,
  getPostsSuccess,
  postsFailure,
  selectPostById,
  getPostByIdStart,
  getPostByIdSuccess,
  createPostStart,
  createPostSuccess,
  updatePostStart,
  updatePostSuccess,
  deletePostByIdStart,
  deletePostByIdSuccess,
  submissionComplete,
} = posts.actions
export default posts.reducer

export const fetchPosts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getPostsStart())
    const localPosts = localStorage.getItem('posts');
    if (localPosts) {
      console.log(localPosts);
      dispatch(getPostsSuccess({ posts: JSON.parse(localPosts) as Post[] }));
    }
    const posts = await PostService.getAllPosts()
    dispatch(getPostsSuccess({ posts }))
    localStorage.setItem('posts', JSON.stringify(posts));
  } catch (err) {
    dispatch(postsFailure(getErrorMessage(err)))
  }
}

export const fetchPostById = (postId: IdType): AppThunk => async (dispatch) => {
  try {
    dispatch(getPostByIdStart(postId));
    const post = await PostService.getPostById(postId);
    dispatch(getPostByIdSuccess(post));
  } catch (err) {
    dispatch(postsFailure(getErrorMessage(err)))
  }
}

export const createPost = (post: Post): AppThunk => async (dispatch) => {
  try {
    dispatch(createPostStart(post));
    const created = await PostService.createNewPost(post);
    dispatch(createPostSuccess(created));
  } catch (err) {
    dispatch(postsFailure(getErrorMessage(err)))
  }
}

export const updatePost = (post: Post): AppThunk => async (dispatch) => {
  try {
    dispatch(updatePostStart(post));
    const created = await PostService.updatePost(post);
    dispatch(updatePostSuccess(created));
  } catch (err) {
    dispatch(postsFailure(getErrorMessage(err)))
  }
}

export const deletePost = (postId: IdType): AppThunk => async (dispatch) => {
  try {
    dispatch(deletePostByIdStart(postId));
    const deleted = await PostService.deletePost(postId);
    dispatch(deletePostByIdSuccess(deleted));
  } catch (err) {
    dispatch(postsFailure(getErrorMessage(err)))
  }
}

interface ValidationError {
  message: string;
  validation: string,
  field: string;
}


interface ValidationErrors {
  message: string;
  error: ValidationError[];
  status?: number;
}

// utils
function getErrorMessage(err: any) {
  if(err.message) {
    return err.message as string;
  } else if(err.error) {
    const error = err as ValidationErrors;
    return error.error.map(e => e.message).join('. ');
  }else {
    return JSON.stringify(err);
  }
}