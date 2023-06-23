import React from 'react';
import './styles.scss';


function ViewDetail({ book }) {
    return (
        <div>
            <div>
                <div className='container'>
                    <div>
                        <img src={book.images[0]} alt='BOOK' className='custom-image'></img>

                    </div>
                    <div className='info-book'>
                        <h2>{book.name}</h2>
                        <div className='author'>
                            <span>
                                <h4>
                                    Authors:
                                    {book.author.map((i) => {
                                        var url = `/author/${i.id}`
                                        return <a href={url} key={i.id}>{i.name}<span>, </span></a>
                                    })}
                                </h4>

                            </span>
                        </div>
                        <div className='category'>
                            <span>
                                <h4>
                                    Categories:
                                    {book.category.map((i) => {
                                        var url = `/category/${i.id}`
                                        return <a href={url} key={i.id}> {i.name} <span>, </span></a>
                                    })}
                                </h4>

                            </span>
                        </div>
                        <div className='prices-book'>
                            {book.prices}
                        </div>
                        <div className='booksubtitle'>
                            {book.booksubtitle}
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default ViewDetail;