import React from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../model/book-model'

const BookList = ({ books }) => {
    return (
        <ul>
            {books.map(book => (<li key={book.id}>{JSON.stringify(book)}</li>))}
        </ul>
    )
}

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.instanceOf(Book))

}

export default BookList
