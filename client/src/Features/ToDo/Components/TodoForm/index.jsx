import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';

TodoForm.propTypes = {
    onSubmit: PropTypes.func
};

function TodoForm(props) {
    const {register, handleSubmit} = useForm()
    const handleOnSubmit = (value) => {
        console.log(value);
    }
    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <input {...register('firstName', { required: true })} />
            <input {...register('title', { required: true })} />
            <TextField {...register('fullname', { required: true })}></TextField>
            <input type="submit" value="Submit" />
        </form>

    );
}

export default TodoForm;