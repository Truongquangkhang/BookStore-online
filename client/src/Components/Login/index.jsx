import { Button, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Redux/Actions';
import './styles.scss';
function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit } = useForm();
    const msg = useSelector((state)=>state.Auth.errorMessage)
    const dispatch = useDispatch();
    const onSubmit = React.useCallback((data) => {
        dispatch(actions.authAction.loginRequest(data))
        
    }, [dispatch]);
    React.useEffect(()=>{
        setErrorMessage(msg)
    },[msg])
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
                        {errorMessage && <p className='show-error'>{errorMessage}</p>}
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
