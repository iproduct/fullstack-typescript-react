import './App.css';

import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { PostList } from './components/PostList/PostList';
import { Post } from './model/post.model';
import PostService from './service/post-service';
import { StringCallback, PostCallback } from './shared/shared-types';
import { PostForm } from './components/PostForm/PostForm';

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
  const [activeView, setActiveView] = useState<string>('posts');
  useEffect(() => {
    PostService.getAllPosts().then(
      posts => setPosts(posts)
    );
  }, []);

  // const [posts, dispatch] = useReducer(postsReducer, []);
  // useEffect(() => MOCK_BOOKS.forEach(
  //   (post, index) => setTimeout(dispatch, index*2000, {type: 'add', post: post as Post})),
  //   []); //on mount only
  

  const handleSearch: StringCallback =  async (searchText) => {
    // const foundPosts = await PostService.loadPosts(searchText.split(/[\s,;]+/));
    // console.log(foundPosts);
    // setPosts(foundPosts);
  };

  const handleViewChange: StringCallback = (viewName) => {
    setActiveView(viewName);
    setEditedPost(undefined);
  };

  const handleEditPost: PostCallback =  (post) => {
    setEditedPost(post);
    setActiveView('add-post');
  };

  const handleDeletePost: PostCallback =  (post) => {
    PostService.deletePost(post.id).then(
      deleted => {
        setPosts(posts.filter(p => p.id !== deleted.id));
        setActiveView('posts');
      }
    );
  };

  const handleSubmitPost: PostCallback =  (post) => {
    if(post.id) { //Edit
      PostService.updatePost(post).then(
        edited => {
          setPosts(posts.map(p => p.id === edited.id ? post: p));
          setActiveView('posts');
        }
      );
    } else { //Create
      PostService.createNewPost(post).then(
        created => {
          setPosts(posts.concat(created));
          setActiveView('posts');
        }
      );
    }
  };

  
  
  return (
    <React.Fragment>
    <Nav onSearchPosts={handleSearch} onViewChange={handleViewChange}/>
    <div className="section no-pad-bot" id="index-banner">
      <div className="container" >
        <Header />
        {activeView === 'posts' && <PostList posts={posts} onEditPost={handleEditPost} onDeletePost={handleDeletePost}/>}
        {activeView === 'add-post' && <PostForm post={editedPost} onSubmitPost={handleSubmitPost} />}
      </div>
    </div>
    </React.Fragment>
  );
}




export default App;
