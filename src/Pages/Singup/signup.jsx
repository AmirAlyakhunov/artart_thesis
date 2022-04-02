import React from 'react';
import {useNavigate} from "react-router-dom";
import Logotype from "../../Components/Logotype/logotype";
import Button from "../../Components/Button/button";
import Field from "../../Components/Field/field";
import {EmailIcon, PasswordIcon, UserNameIcon} from "../../Assets/variableSvg";

const Signup = () => {
    const redirect = useNavigate();

    return (
        <div className='login-container'>
            <div className='login-header'>
                <Logotype/>
                <Button type={'tertiary'} clickHandler={() => redirect('/login')}>Вход</Button>
            </div>
            <div className='login-main-container'>
                <div className='login-main-title'>Регистрация</div>
                <Field src={EmailIcon} placeholder={'Электронная почта'} style={{marginBottom: '16px'}}/>
                <Field src={UserNameIcon} placeholder={'Пвсевдоним'} style={{marginBottom: '16px'}}/>
                <Field src={PasswordIcon} placeholder={'Пароль 6+ символов'} style={{marginBottom: '16px'}}/>
                <Button type={'primary'} style={{width: '100%'}}>Зарегистрироваться</Button>
            </div>
        </div>
    );
};

export default Signup;