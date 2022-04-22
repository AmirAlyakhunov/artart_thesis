import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Logotype from "../../Components/Logotype/logotype";
import Button from "../../Components/Button/button";
import Field from "../../Components/Field/field";
import {EmailIcon, PasswordIcon, UserNameIcon} from "../../Assets/variableSvg";
import {useCookies} from "react-cookie";
import axios from "axios";
import ErrorMessage from "../../Components/ErrorMessage/errorMessage";

const Signup = () => {
    const redirect = useNavigate();
    const url ='https://artartwebapp.herokuapp.com/auth/register';
    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token']);
    const [errorMessage, setErrorMessage] = useState('');

    const [data, setData] = useState({
        email: '',
        password: '',
    })
    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    function submit(e) {
        e.preventDefault();
        axios.post(url,  {
            email: data.email,
            password: data.password
        }, {headers: {'Content-Type': 'application/json'}})
            .then(function (response){
                setCookie('access_token', response.data.accessToken, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                })
                setCookie('refresh_token', response.data.refreshToken, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                })
                if(response.status === 201) redirect('/user/me', {replace: true})
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
                <div className='login-main-title'>Регистрация</div>
                <Field onChange={(e) => handle(e)} id={'email'} value={data.email} type={'text'} src={EmailIcon} placeholder={'Электронная почта'} style={{marginBottom: '16px'}}/>
                <Field onChange={(e) => handle(e)} id={'name'} value={data.name} type={'text'} src={UserNameIcon} placeholder={'Псевдоним'} style={{marginBottom: '16px'}}/>
                <Field onChange={(e) => handle(e)} id={'password'} value={data.password} type={'password'} src={PasswordIcon} placeholder={'Пароль'} style={{marginBottom: '16px'}}/>
                <Button type={'primary'} style={{width: '100%', marginBottom: '16px'}}>Войти</Button>
                {
                    errorMessage ? <ErrorMessage>Ошибка регистрации: {errorMessage}</ErrorMessage> : false
                }
            </form>
        </div>
    );
};

export default Signup;