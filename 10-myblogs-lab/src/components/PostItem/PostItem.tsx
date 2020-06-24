import * as React from 'react';
import { Post } from '../../model/post.model';
import './PostItem.css';

interface Props {
  post: Post;
}

export const PostItem: React.FC<Props> = ({post}) => {
  return (
    <div className="PostItem-card-wrapper col l6 Post-card">
      <div className="card">
        <div className="PostItem-card-image waves-effect waves-block waves-light">
          <img
            className="activator PostItem-image"
            src={post.imageUrl ? post.imageUrl : '/img/no-image.jpg'}
            alt="front page"
          />
        </div>
        <div className="PostItem-card-content">
          <span className="card-title activator grey-text text-darken-4">
            {post.title}
            <i className="material-icons right">more_vert</i>
          </span>
          <p>{post.text}</p>
          <div className="card-action Post-card-action">
            <a href="posts?remove={{.ID}}">Add to Favs</a>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {post.title}
            <i className="material-icons right">close</i>
          </span>
          <p>{post.text}</p>
        </div>
      </div>
    </div>
  );
};
