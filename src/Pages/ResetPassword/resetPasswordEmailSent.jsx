import React from 'react';
import {useNavigate} from "react-router-dom";
import Logotype from "../../Components/Logotype/logotype";
import Button from "../../Components/Button/button";

const ResetPasswordEmailSent = () => {
    const redirect = useNavigate();

    return (
        <div className='login-container'>
            <div className='login-header'>
                <Logotype/>
                <Button type={'tertiary'} clickHandler={() => redirect('/')}>Главная</Button>
            </div>
            <div className='login-main-container' style={{height: '100%', justifyContent: 'center'}}>
                <div className='login-main-title' style={{textAlign: 'center'}}>На вашу почту отправлено письмо для сброса пароля</div>
            </div>
        </div>
    );
};

export default ResetPasswordEmailSent;