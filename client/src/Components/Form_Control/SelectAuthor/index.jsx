import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../Redux/Actions'


function SelectAuthor(props) {
    const { control, name } = props

    const dispatch = useDispatch();
    const authors = useSelector((state) => state.Author.data);

    React.useEffect(() => {
        dispatch(actions.getAuthors.getAuthorsRequest());

    }, [dispatch]);


    return (
        <div>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <Select
                    {...field}
                    isMulti
                    options={authors.map((author)=>({
                        value: author._id, 
                        label: author.name
                   }))}
                />}
            />
        </div>
    );
}

export default SelectAuthor;