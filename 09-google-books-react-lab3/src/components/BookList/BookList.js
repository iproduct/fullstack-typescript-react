import React from 'react'
import PropTypes from 'prop-types'
import { Book } from '../../model/book.model'
import BookItem from '../BookItem/BookItem'

const BookList = ({ books }) => {
    return (
        <div className="section row">
            {books.map(bk => (<BookItem key={bk.id} book={bk} />))}
        </div>
    )
}

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.instanceOf(Book))
}

export default BookList
