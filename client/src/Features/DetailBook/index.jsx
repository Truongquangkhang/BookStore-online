import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import apiBook from '../../API/apiBook';
import ViewDetail from './Components/Detail';
import UpdateBook from './Components/UpdateBook'


function DetailBook() {
    const { idbook } = useParams()
    const [book, setbook] = useState(null)
    const [showEditLayer, setShowEditLayer] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleDeleteBook = async () => {
        try {
            await apiBook.deleteBook(idbook)
            window.location.href = '/'
        } catch (error) {
            console.log(error);
        }
    }
    const handlerClick = async ()=>{
        try {
            
        } catch (error) {
            
        }
    }
    React.useEffect(() => {
        const getBook = async () => {
            const book = await apiBook.detailBook(idbook)
            setbook(book.data)
            setLoading(false)
        }
        getBook()
    }, [idbook])

    if (loading) {
        return <div></div>;
    }

    return (
        <div className='hehe'>
            {showEditLayer ?
                <div><UpdateBook book={book} /></div> :
                <div>
                    <ViewDetail book={book} />
                    <div className='button-change'>
                        <Button onClick={() => { setShowEditLayer(true) }}>Update</Button>
                        <Button onClick={handleDeleteBook}>Delete</Button>
                        <Button onClick={handlerClick}>Read</Button>
                    </div>
                </div>

            }

        </div>
    )

}

export default DetailBook;