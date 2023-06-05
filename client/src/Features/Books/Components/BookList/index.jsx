import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import BookItem from '../BookItem';
BookList.propTypes = {
    List_Books: PropTypes.array,
    clickBook: PropTypes.func
};

BookList.defaultProps = {
    List_Books: [],
    clickBook: null
}
function BookList({ List_Books, clickBook }) {
    // const handelClickBook = (book, idx) => {
    //     if(!clickBook) return;
    //     clickBook(book, idx)
    // }
    return (
        <>
            <div className='BookList'>
                {
                    List_Books.map((book) => {
                        return (
                            <div key={book._id} className='bookitem'>
                                <BookItem book={book} />
                            </div>)

                    })
                }
            </div>
        </>
    );
}

export default BookList;