import * as React from 'react';
import { Post } from '../../model/post.model';
import { ReactElement } from 'react';
import { PostItem } from '../PostItem/PostItem';
import { PostCallback } from '../../shared/shared-types';
import Header from '../Header/Header';
import { Grid } from '@material-ui/core';

interface Props {
  posts: Post[];
  onEditPost: PostCallback;
  onDeletePost: PostCallback;
}

export function PostList({ posts, ...rest }: Props): ReactElement<Props> {
  return (
    <React.Fragment>
      <Header />
      <Grid container spacing={2}>
        {posts.map(post => (<PostItem post={post} key={post._id} {...rest} />))}
      </Grid>
    </React.Fragment>
  );
};
