import { Button, Input, TextField, InputLabel, } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './styles.scss'
import SelectAuthor from '../SelectAuthor';
import SelectCategory from '../SelectCategory';
import apiBook from '../../../API/apiBook';
function FormAddBook() {
    const { control, handleSubmit, register } = useForm({
        defaultValues: {
            author: [],
            category: [],
        }
    });


    // Functions to preview multiple images
    
    const onSubmit = (data) => {
        try {
            data.author = data.author.map((t) => (t.value))
            data.category = data.category.map((t) => (t.value))


            const fileList = data.images // FileList


            const formData = new FormData();
            for (let i = 0; i < fileList.length; i++) {
                formData.append("images",fileList[i])
            }

            delete data.images
            // for (const key of Object.keys(multipleImages)) {
            //     formData.append('images', data.images[key]);
            //}
            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value);
            }
            apiBook.createBook(formData)
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form_add' >
            <div className='unit'>
                <InputLabel>Name</InputLabel>
                <Input {...register("name")} />
            </div>
            <div className='unit'>
                <InputLabel>Prices</InputLabel>
                <Input {...register("prices")} />
            </div>
            <div className='unit'>
                <InputLabel>Author</InputLabel>
                <SelectAuthor control={control} name="author" />
                <Button type='button' onClick={() => window.location.href = '/author/add'}>Add</Button>
            </div>
            <div className='unit'>
                <InputLabel>Category</InputLabel>
                <SelectCategory control={control} name="category" />
                <Button type='button' onClick={() => window.location.href = '/category/add'}>Add</Button>
            </div>
            <div className='unit'>
                <InputLabel>Images</InputLabel>

                <input
                    type="file"
                    multiple
                    {...register('images', { required: true })}
                />
            </div>
            <div className='unit'>
                <InputLabel>BookSubTitle</InputLabel>
                <TextField {...register("booksubtitle")} />
            </div>
            <div className='unit'>
                <Button type='submit'>submit</Button>
            </div>

        </form>
    );
}

export default FormAddBook;