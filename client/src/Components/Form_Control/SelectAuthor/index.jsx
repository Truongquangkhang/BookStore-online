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

    const options = authors.map((author) => ({
        value: author._id,
        label: author.name,

    }))

    return (

        <div>
            <Controller
                name={name}
                control={control}

                // Set the default options
                render={({ field }) => (
                    <Select
                    //defaultValue={[{value: "647da7e41d56786ca8c1e8ae", lable: "Nguyễn Hà An" }]} 
                        {...field}
                        isMulti
                        options={options}
                    />
                )}
            />
        </div>
    );
}

export default SelectAuthor;