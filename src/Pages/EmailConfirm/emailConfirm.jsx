import React from 'react';
import Logotype from "../../Components/Logotype/logotype";
import Button from "../../Components/Button/button";
import {useNavigate} from "react-router-dom";

const EmailConfirm = () => {
    const redirect = useNavigate();

    return (
        <div className='login-container'>
            <div className='login-header'>
                <Logotype/>
                <Button type={'tertiary'} clickHandler={() => redirect('/')}>Главная</Button>
            </div>
            <div className='login-main-container' style={{height: '100%', justifyContent: 'center'}}>
                <div className='login-main-title' style={{textAlign: 'center'}}>На вашу почту отправлено письмо для подтверждения email</div>
            </div>
        </div>
    );
};

export default EmailConfirm;