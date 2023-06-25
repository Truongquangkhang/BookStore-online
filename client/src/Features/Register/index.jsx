import { Button, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import apiAuthorization from '../../API/apiAuthorization';

function Register() {
    const [errorMessage, setErrorMessage] = useState('');
    const { handleSubmit, register } = useForm({
        defaultValues: {
        }
    });
    const handleRegister = async (data) => {
        try {
            const msg = await apiAuthorization.register(data)
            if (msg.data.err) {
                setErrorMessage(msg.data.err)
            }
            else {
                window.location.href = '/login'
            }
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
                    {errorMessage && <p>{errorMessage}</p>}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Register;