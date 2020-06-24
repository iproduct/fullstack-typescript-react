import * as React from 'react';
import { Post } from '../../model/post.model';
import { ReactElement } from 'react';
import { PostItem } from '../PostItem/PostItem';

interface Props {
    posts: Post[];
}

export function PostList({posts, ...rest}: Props): ReactElement<Props> {
    return (
      <div className="section row">
      { posts.map(post => (<PostItem post={post} key={post.id} {...rest} />)) }
      </div>
    );
};
