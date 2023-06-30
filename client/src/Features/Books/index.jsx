import React, { useState } from 'react';
import BookList from './Components/BookList';

import { useDispatch, useSelector } from 'react-redux';
import Buttons from '../../Components/Buttons';
import Filter from '../../Components/Filter';
import * as actions from '../../Redux/Actions';
import './styles.scss';
function Books() {
    const [filter, setFilter] = useState({
        categories: [],
        authors: []
    })
    const dispatch = useDispatch();
    const books = useSelector((state) => state.Book.data);
    const categories = useSelector((state)=>state.Category.data)
    const authors =  useSelector((state)=>state.Author.data)
    const handleFilter = React.useCallback( (value)=>{
        //const temp = await apiBook.getByFilter(value.categories, value.authors)
        setFilter(value)
    },[])
    React.useEffect(() => {
        dispatch(actions.getBooks.getBooksRequest(filter));
        dispatch(actions.getCategories.getCategoriesRequest());
        dispatch(actions.getAuthors.getAuthorsRequest());
    }, [dispatch, filter]);

    
    return (
        <div className='container'>
            <div className='container-filter'>
                <Filter category={categories} author={authors} filter={handleFilter}/>
            </div>
            <div className='container-book'>
                <BookList List_Books={books} ></BookList>
                <Buttons></Buttons>
            </div>
            
        </div>
    );
}

export default Books;

