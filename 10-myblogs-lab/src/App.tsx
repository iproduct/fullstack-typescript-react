import './App.css';

import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { PostList } from './components/PostList/PostList';
import { Post } from './model/post.model';
import PostService from './service/post-service';
import { SearchCallback } from './shared/shared-types';

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
  useEffect(() => {
    PostService.getAllPosts().then(
      posts => setPosts(posts)
    );
  }, []);

  // const [posts, dispatch] = useReducer(postsReducer, []);
  // useEffect(() => MOCK_BOOKS.forEach(
  //   (post, index) => setTimeout(dispatch, index*2000, {type: 'add', post: post as Post})),
  //   []); //on mount only
  

  const handleSearch: SearchCallback =  async (searchText) => {
    // const foundPosts = await PostService.loadPosts(searchText.split(/[\s,;]+/));
    // console.log(foundPosts);
    // setPosts(foundPosts);
  };
  
  return (
    <React.Fragment>
    <Nav onSearchPosts={handleSearch} />
    <div className="section no-pad-bot" id="index-banner">
      <div className="container" >
        <Header />
        <PostList posts={posts} />
      </div>
    </div>
    </React.Fragment>
  );
}




export default App;
