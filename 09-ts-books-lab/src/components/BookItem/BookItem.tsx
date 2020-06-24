import * as React from 'react';
import { Book } from '../../model/book.model';
import './BookItem.css';

interface Props {
  book: Book;
}

export const BookItem: React.FC<Props> = ({book}) => {
  return (
    <div className="card-wrapper col l6 Book-card">
      <div className="card horizontal">
        <div className="BookItem-card-image waves-effect waves-block waves-light">
          <img
            className="activator Book-front-image"
            src={book.frontPage ? book.frontPage : '/img/no-image.jpg'}
            alt="front page"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {book.title}
            <i className="material-icons right">more_vert</i>
          </span>
          <p>{book.subtitle}</p>
          <div className="card-action Book-card-action">
            <a href="books?remove={{.ID}}">Add to Favs</a>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {book.title}
            <i className="material-icons right">close</i>
          </span>
          <p>{book.subtitle}</p>
        </div>
      </div>
    </div>
  );
};
