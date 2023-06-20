import { Button, Input, InputLabel } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as actions from '../../Redux/Actions';
import './styles.scss';
function Login() {
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const onSubmit = React.useCallback((data) => {
        dispatch(actions.authAction.loginRequest(data))
    }, [dispatch]);
    
    

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='login'>
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

                </div>
            </form>
        </div>
    );
}

export default Login;
