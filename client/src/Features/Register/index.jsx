import { Button, Input, InputLabel } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import apiBook from '../../API/apiBook';
import apiAuthorization from '../../API/apiAuthorization';

function Register() {
    const { handleSubmit, register } = useForm({
        defaultValues: {
        }
    });
    const handleRegister = async (data) => {
        try {
            await apiAuthorization.register(data)

            window.location.href = '/login'
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form className='register-form' onClick={handleSubmit(handleRegister)}>
                <div>
                    <InputLabel>Name</InputLabel>
                    <Input {...register("name", { required: true })}></Input>
                </div>
                <div>
                    <InputLabel>Email</InputLabel>
                    <Input {...register("username", { required: true })}></Input>
                </div>
                <div>
                    <InputLabel>Password</InputLabel>
                    <Input {...register("password", { required: true })}></Input>
                </div>
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
}

export default Register;