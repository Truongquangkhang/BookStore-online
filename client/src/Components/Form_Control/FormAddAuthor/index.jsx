import { Button, Input, TextField, InputLabel,  } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import './styles.scss'
import SelectAuthor from '../SelectAuthor';
import SelectCategory from '../SelectCategory';
import apiBook from '../../../API/apiBook';
import apiAuthor from '../../../API/apiAuthor';

function FormAddBook() {
    const { control, handleSubmit, register } = useForm({
        defaultValues: {
            
        }
      });
    const onSubmit = (data)=>{
        console.log(data);
        try {
            apiAuthor.createAuthor(data)
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form_add'>
            <div className='unit'>
                <InputLabel>Name</InputLabel>
                <Input {...register("name")} />
            </div>
            <div className='unit'>
                <InputLabel>Images</InputLabel>
                <Input {...register("image")} />
            </div>
            <div>
                <Button type='submit'>Add</Button>
            </div>

        </form>
    );
}

export default FormAddBook;