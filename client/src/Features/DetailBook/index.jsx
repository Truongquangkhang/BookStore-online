import React from 'react';
import { useParams } from 'react-router-dom';


function DetailBook() {
    const {idbook} = useParams()
    return (
        <div>
            HELLO
            <h1>{idbook}</h1>
        </div>
    );
}

export default DetailBook;