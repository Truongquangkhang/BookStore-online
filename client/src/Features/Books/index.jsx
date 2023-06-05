import React from 'react';
import BookList from './Components/BookList';
import { Outlet } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Redux/Actions'
import Buttons from '../../Components/Buttons';

function Books() {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.Book.data);

    React.useEffect(() => {
        dispatch(actions.getBooks.getBooksRequest());

    }, [dispatch]);

  
    return (
        <div >
            <BookList List_Books={books} ></BookList>
            <Buttons></Buttons>
        </div>
    );
}

export default Books;
