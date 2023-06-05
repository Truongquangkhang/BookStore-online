import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../Redux/Actions'


function SelectCategory(props) {
    const { control, name } = props

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.Category.data);

    React.useEffect(() => {
        dispatch(actions.getCategories.getCategoriesRequest());

    }, [dispatch]);


    return (
        <div>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <Select
                    {...field}
                    isMulti
                    options={categories.map((author)=>({
                        value: author._id, 
                        label: author.name
                   }))}
                />}
            />
        </div>
    );
}

export default SelectCategory;