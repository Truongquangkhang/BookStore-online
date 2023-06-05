import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
BookItem.propTypes = {
    book: PropTypes.object
};
BookItem.defaultProps = {
    book: {
        id: 0,
        img: "https://eccthai.com/wp-content/uploads/2021/01/sach-dac-nhan-tam-dale-carnegie.jpg",
        name: "",
        prices: ""
    }
}
function BookItem({ book }) {
    return (
        <div className="book">
            <div className='thumnail_item'>
                <img src={book.images[0]} alt="Book Cover" />
            </div>
            <div className='info_book'>
                <h4 className="book-title">{book.name}</h4>
                <p className="book-price">{book.prices}</p>
            </div>


        </div>
    );
}

export default BookItem;