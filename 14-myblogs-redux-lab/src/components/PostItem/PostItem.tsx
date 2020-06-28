import * as React from 'react';
import { Post } from '../../model/post.model';
import './PostItem.css';
import { PostCallback } from '../../shared/shared-types';
import { Marked } from '@ts-stack/markdown';

interface Props {
  post: Post;
  onEditPost: PostCallback;
  onDeletePost: PostCallback;
}

const rawMarkup = (markdownText: string) => (
  {__html :Marked.parse(markdownText)}
);

export const PostItem: React.FC<Props> = ({post, onEditPost, onDeletePost}) => {
  
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onEditPost(post);
  }
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onDeletePost(post);
  }

  return (
    <div className="PostItem-card-wrapper col l6 Post-card">
      <div className="card">
        <div className="PostItem-card-image waves-effect waves-block waves-light">
          <img
            className="activator PostItem-image"
            src={post.imageUrl ? post.imageUrl : '/img/no-image.png'}
            alt="front page"
          />
        </div>
        <div className="PostItem-card-content">
          <div className="card-title activator grey-text text-darken-4">
            <div className="PostItem-title">
              {post.title}
            </div>
            <div className="PostItem-tags">
              {post.categories?.map((cat, index) => (
                <div key={index} className="chip category">{cat}</div>
              ))}
              {post.keywords?.map((kword, index) => (
                <div key={index + 1000} className="chip keyword">{kword}</div>
              ))}
            </div>
            <i className="material-icons right">more_vert</i>
          </div>
          <p dangerouslySetInnerHTML={rawMarkup(post.text)}></p>
          <div className="PostItem-card-actions card-action">
            <a href="posts?remove={{.ID}}">Add to Favs</a>
            <div className="PostItem-buttons-right">
              <button className="btn waves-effect waves-light" title="EDIT Post" onClick={handleEdit}>
                <i className="material-icons">create</i>
              </button>
              <button className="btn danger waves-effect waves-light" title="DELETE Post" onClick={handleDelete}>
                <i className="material-icons">delete</i>
              </button>
            </div>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {post.title}
            <i className="material-icons right">close</i>
          </span>
          <p dangerouslySetInnerHTML={rawMarkup(post.text)}></p>
        </div>
      </div>
    </div>
  );
};
