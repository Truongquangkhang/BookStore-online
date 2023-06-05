import { Button, Input, TextField, InputLabel,  } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import './styles.scss'
import apiCategory from '../../../API/apiCategory'

function FormAddBook() {
    const { control, handleSubmit, register } = useForm({
        defaultValues: {
            
        }
      });
    const onSubmit = (data)=>{
        console.log(data);
        try {
            apiCategory.createAuthor(data)
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
                <InputLabel>Description</InputLabel>
                <Input {...register("description")} />
            </div>
            <div>
                <Button type='submit'>Add</Button>
            </div>

        </form>
    );
}

export default FormAddBook;