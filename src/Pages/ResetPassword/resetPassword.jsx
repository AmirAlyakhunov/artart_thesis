import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import Logotype from "../../Components/Logotype/logotype";
import Button from "../../Components/Button/button";
import Field from "../../Components/Field/field";
import {EmailIcon, PasswordIcon, UserNameIcon} from "../../Assets/variableSvg";
import ErrorMessage from "../../Components/ErrorMessage/errorMessage";

const ResetPassword = () => {
    const redirect = useNavigate();
    const url ='https://artartwebapp.herokuapp.com/api/user/password/reset';
    const [errorMessage, setErrorMessage] = useState('');

    const [data, setData] = useState({
        email: '',
    })
    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    function submit(e) {
        e.preventDefault();
        axios.patch(url,  {
            email: data.email
        }, {headers: {'Content-Type': 'application/json'}})
            .then(function (response){
                if(response.status === 200) redirect('/ResetPasswordEmailSent', {replace: true})
            }).catch((err) => {
            setErrorMessage(err.response.data?.message)
        })
    }
    return (
        <div className='login-container'>
            <div className='login-header'>
                <Logotype/>
                <Button type={'tertiary'} clickHandler={() => redirect('/login')}>Вход</Button>
            </div>
            <form className='login-main-container' onSubmit={(e)=>submit(e)}>
                <div className='login-main-title'>Забыли пароль от аккаунта?</div>
                <Field onChange={(e) => handle(e)} id={'email'} value={data.email} type={'text'} src={EmailIcon} placeholder={'Электронная почта'} style={{marginBottom: '16px'}}/>
                <Button type={'primary'} style={{width: '100%', marginBottom: '16px'}}>Подтвердить</Button>
                {
                    errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : false
                }
            </form>
        </div>
    );
};

export default ResetPassword;