import * as React from 'react';
import { Post } from '../../model/post.model';
import { ReactElement } from 'react';
import { PostItem } from '../PostItem/PostItem';
import { PostCallback } from '../../shared/shared-types';
import Header from '../Header/Header';

interface Props {
  posts: Post[];
  onEditPost: PostCallback;
  onDeletePost: PostCallback;
}

export function PostList({ posts, ...rest }: Props): ReactElement<Props> {
  return (
    <React.Fragment>
      <Header />
      <div className="section row">
        {posts.map(post => (<PostItem post={post} key={post.id} {...rest} />))}
      </div>
    </React.Fragment>
  );
};
