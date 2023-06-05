import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Redux/Actions'

function BookList() {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.Book.data);

    React.useEffect(() => {
        dispatch(actions.getBooks.getBooksRequest());

    }, [dispatch]);
    return (
        <div>
            {
                books.map((book)=>{
                    return <h1 key={book._id}>{book.name}</h1>
                })
            }
        </div>
    );
}

export default BookList;