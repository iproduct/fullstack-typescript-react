import * as React from 'react';
import { Book } from '../../model/book.model';
import { ReactElement } from 'react';
import { BookItem } from '../BookItem/BookItem';

interface Props {
    books: Book[];
}

export function BookList({books, ...rest}: Props): ReactElement<Props> {
    return (
      <div className="section">
      { books.map(book => (<BookItem book={book} key={book.id} {...rest} />)) }
      </div>
    );
};
