import './App.css';

import React, { useEffect, useState } from 'react';

import Nav from '../components/Nav/Nav';
import { PostList } from '../components/PostList/PostList';
import { Post } from '../model/post.model';
import PostService from '../service/post-service';
import { StringCallback, PostCallback } from '../shared/shared-types';
import { PostForm } from '../components/PostForm/PostForm';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

// import MOCK_POSTS from './model/mock-posts';
export interface PostAction {
  type: string;
  post: Post;
}

// function postsReducer(state: Post[], action: PostAction) {
//   switch (action.type) {
//     case 'add':
//       return [...state, action.post];
//     // ... other actions ...
//     default:
//       return state;
//   }
// }


function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editedPost, setEditedPost] = useState<Post | undefined>(undefined);

  const history = useHistory();

  useEffect(() => {
    PostService.getAllPosts().then(
      posts => setPosts(posts)
    );
  }, []);

  // const [posts, dispatch] = useReducer(postsReducer, []);
  // useEffect(() => MOCK_BOOKS.forEach(
  //   (post, index) => setTimeout(dispatch, index*2000, {type: 'add', post: post as Post})),
  //   []); //on mount only


  const handleSearch: StringCallback = async (searchText) => {
    // const foundPosts = await PostService.loadPosts(searchText.split(/[\s,;]+/));
    // console.log(foundPosts);
    // setPosts(foundPosts);
  };


  const handleEditPost: PostCallback = (post) => {
    setEditedPost(post);
    history.push(`/edit-post/${post._id}`);
  };

  const handleDeletePost: PostCallback = (post) => {
    PostService.deletePost(post._id).then(
      deleted => {
        setPosts(posts.filter(p => p._id !== deleted._id));
        history.push('/posts');
      }
    );
  };

  const handleSubmitPost: PostCallback = (post) => {
    if (post._id) { //Edit
      PostService.updatePost(post).then(
        edited => {
          setPosts(posts.map(p => p._id === edited._id ? post : p));
        }
      );
    } else { //Create
      PostService.createNewPost(post).then(
        created => {
          setPosts(posts.concat(created));
        }
      );
    }
    history.push('/posts');
  };



  return (
    <React.Fragment>
      <Nav onSearchPosts={handleSearch} />
      <div className="section no-pad-bot" id="index-banner">
        <div className="container" >
          <Switch>
            <Route exact path="/">
              <Redirect to="/posts" />
            </Route>
            <Route exact path="/posts">
              <PostList posts={posts} onEditPost={handleEditPost} onDeletePost={handleDeletePost} />
            </Route>
            <Route exact path="/add-post">
              <PostForm />
            </Route>
            <Route exact path="/edit-post/:postId">
              <PostForm  />
            </Route>
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}




export default App;
