import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Logotype from "../../Components/Logotype/logotype";
import Button from "../../Components/Button/button";
import Field from "../../Components/Field/field";
import {PasswordIcon} from "../../Assets/variableSvg";
import ErrorMessage from "../../Components/ErrorMessage/errorMessage";
import SuccessWin from "../../Components/SuccessResetWin/successWin";

const ResetPasswordConfirm = () => {
    const redirect = useNavigate();
    const params = useParams();
    const url ='https://artartwebapp.herokuapp.com/api/user/password/reset/' + params.token;
    const [errorMessage, setErrorMessage] = useState('');
    const [successReset, setSuccessReset] = useState(false);

    const [data, setData] = useState({
        password: '',
    })
    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    function submit(e) {
        e.preventDefault();
        axios.patch(url,  {
            password: data.password
        }, {headers: {'Content-Type': 'application/json'}})
            .then(function (response){
                if(response.status === 200) setSuccessReset(true)
            }).catch((err) => {
            setErrorMessage(err.response.data?.message)
        })
    }

    return (
        <div className='login-container'>
            {
                successReset ? <SuccessWin clickRedirect={() => redirect('/login')} successLinkText={'Вернуться на форму входа'} successText={'Ваш пароль успешно изменён'}/> : false
            }
            <div className='login-header'>
                <Logotype/>
                <Button type={'tertiary'} clickHandler={() => redirect('/signup')}>Регистрация</Button>
            </div>
            <form className='login-main-container' onSubmit={(e)=>submit(e)}>
                <div className='login-main-title'>Ввод нового пароля для аккаунта</div>
                <Field onChange={(e) => handle(e)} id={'password'} value={data.password} type={'password'} src={PasswordIcon} placeholder={'Новый пароль 6+ символов'} style={{marginBottom: '16px'}}/>
                <Button type={'primary'} style={{width: '100%', marginBottom: '16px'}}>Изменить пароль</Button>
                {
                    errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : false
                }
            </form>
        </div>
    );
};

export default ResetPasswordConfirm;