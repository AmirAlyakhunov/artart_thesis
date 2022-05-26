import React from 'react';
import Logotype from "../../Components/Logotype/logotype";
import Button from "../../Components/Button/button";
import {useNavigate} from "react-router-dom";
import {MailSentIcon} from "../../Assets/variableSvg";

const EmailConfirm = () => {
    const redirect = useNavigate();

    return (
        <div className='login-container'>
            <div className='login-header'>
                <Logotype/>
                <Button type={'tertiary'} clickHandler={() => redirect('/signup')}>Регистрация</Button>
            </div>
            <div className='login-main-container' style={{height: '100%', justifyContent: 'center'}}>
                <img src={MailSentIcon}/>
                <div className='login-main-title' style={{textAlign: 'center', marginTop: '16px'}}>На вашу почту отправлено письмо для подтверждения email</div>
            </div>
        </div>
    );
};

export default EmailConfirm;