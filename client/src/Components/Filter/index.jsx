import React, { useState } from 'react';

function Filter({ category, author, filter }) {

    const [listCategory, setListCategory] = useState([])
    const [listAuthor, setListAuthor]= useState([])

    const handlerClickCate = (event)=>{
        let temp = listCategory
        if(event.target.checked){
            temp.push(event.target.value);
        }
        else{
            temp = temp.filter((e)=> e!==event.target.value)
        }
        setListCategory(temp)

        filter({
            categories: listCategory,
            authors: listAuthor 
        })
        
    }
    const handlerClickAuthor = (event)=>{
        let temp = listAuthor
        if(event.target.checked){
            temp.push(event.target.value);
        }
        else{
            temp = temp.filter((e)=> e!==event.target.value)
        }
        
        setListAuthor(temp)
        filter({
            categories: listCategory,
            authors: listAuthor 
        })
        
    }
    return (
        <div className='filter'>
            <div className='container_category'>

                <h3>Category</h3>

                <div>
                    {category.map((element) => {
                        return (
                            <div key={element._id} className="column">
                                <input type="checkbox" value={element._id} onChange={handlerClickCate} />
                                <label>{element.name}</label>
                            </div>

                        )
                    })}

                </div>
            </div>
            <div className='container_author'>
                <h3>Author</h3>
                <div>
                    {author.map((element) => {
                        return (
                            <div key={element._id} className="column">
                                <input type="checkbox" value={element._id} onChange={handlerClickAuthor} />
                                <label>{element.name}</label>
                            </div>

                        )
                    })}

                </div>
            </div>

        </div>
    );
}

export default Filter;