import { Button, Input, InputLabel, TextField, } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import apiBook from '../../../../API/apiBook';
import SelectAuthor from '../../../../Components/Form_Control/SelectAuthor';
import SelectCategory from '../../../../Components/Form_Control/SelectCategory';
import './styles.scss'
import ImageUploader from '../ImageUploader';
function UpdateBook({ book }) {

    const [files, setFiles] = useState([])
    const defaultAuthor = book.author.map((T) => ({
        value: T.id,
        lable: T.name
    }))
    const defaultCategory = book.category.map((T) => ({
        value: T.id,
        lable: T.name
    }))
    const { control, handleSubmit, register } = useForm({
        defaultValues: {
            name: book.name,
            prices: book.prices,
            booksubtitle: book.booksubtitle,
            author: defaultAuthor,
            category: defaultCategory,
        }
    });

    const updateImages = (files) =>{
        setFiles(files)
        console.log("Files",files);
    }
    // Functions to preview multiple images

    const onSubmit = (data) => {
        try {
            data.author = data.author.map((t) => (t.value))
            data.category = data.category.map((t) => (t.value))


            const fileList = files// FileList


            const formData = new FormData();
            for (let i = 0; i < fileList.length; i++) {
                formData.append("images", fileList[i])
            }

            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value);
            }
            apiBook.updateBook(book._id,formData)

            window.location.href = '/';

            console.log(formData);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className='unit'>
                <InputLabel>Name</InputLabel>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
            </div>
            <div className='unit'>
                <InputLabel>Prices</InputLabel>
                <Controller
                    name="prices"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
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
                <ImageUploader handleChange={updateImages} files={book.images}/>
            </div>
            <div className='unit'>
                <InputLabel>BookSubTitle</InputLabel>
                <Controller
                    name="booksubtitle"
                    control={control}
                    render={({ field }) => <TextField {...field} />}
                />
            </div>
            <div className='unit'>
                <Button type='submit'>submit</Button>
            </div>

        </form>
    );
}

export default UpdateBook;