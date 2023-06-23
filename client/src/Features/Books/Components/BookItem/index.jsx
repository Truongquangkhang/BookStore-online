import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
BookItem.propTypes = {
    book: PropTypes.object
};

function BookItem({ book }) {
    const handlerClick = () => {
        window.location.href = `/book/${book._id}`
    }

    return (
        <div className="book">
            <span onClick={handlerClick}>
                <div className='thumnail_item'>
                    <img src={book.images[0]} alt="Book Cover" />
                </div>
                <div className='info_book'>
                    <h4 className="book-title">{book.name}</h4>
                    <p className="book-price">{book.prices}</p>
                </div>
            </span>

        </div>
    );
}

export default BookItem;