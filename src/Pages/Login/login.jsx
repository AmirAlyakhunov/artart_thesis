import React from 'react';
import './login.css';
import Header from "../Home/GeneralParts/Header/header";
import Button from "../../Components/Button/button";
import Logotype from "../../Components/Logotype/logotype";
import {useNavigate} from "react-router-dom";
import Field from "../../Components/Field/field";
import {EmailIcon, PasswordIcon} from "../../Assets/variableSvg";

const Login = () => {
    const redirect = useNavigate();

    return (
        <div className='login-container'>
            <div className='login-header'>
                <Logotype/>
                <Button type={'tertiary'} clickHandler={() => redirect('/signup')}>Регистрация</Button>
            </div>
            <div className='login-main-container'>
                <div className='login-main-title'>Вход в аккаунт</div>
                <Field src={EmailIcon} placeholder={'Электронная почта'} style={{marginBottom: '16px'}}/>
                <Field src={PasswordIcon} placeholder={'Пароль'} style={{marginBottom: '16px'}}/>
                <Button type={'primary'} style={{width: '100%'}}>Войти</Button>
            </div>
        </div>
    );
};

export default Login;