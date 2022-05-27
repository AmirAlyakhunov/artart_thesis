import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {Buffer} from "buffer";
import PostGetData from "../../API/postGetData";
import ScrollToTop from "../../ScrollFunction/scrollToTop";
import Loader from "../../Components/Loader/loader";
import Button from "../../Components/Button/button";
import PartsHeader from "../../Components/PartsHeader/partsHeader";
import {EmailIcon, EmptyImgIcon, PasswordIcon, UserNameIcon} from "../../Assets/variableSvg";
import ArtistCard from "../Home/GeneralParts/Body/Artists/ArtistCard/artistCard";
import Field from "../../Components/Field/field";
import ErrorMessage from "../../Components/ErrorMessage/errorMessage";
import axios from "axios";

const ProfileEdit = () => {
    const redirect = useNavigate();
    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token']);
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState({
        email: '',
        name: '',
    });
    const [userUpdate, setUserUpdate] = useState({
        email: '',
        name: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    useEffect(() =>{
        User(cookies.access_token)
    }, [])

    async function User() {
        setIsLoading(true);
        let expDate = Buffer.from(cookies.access_token.split('.')[1], "base64").toString();
        expDate = JSON.parse(expDate);
        let newDate = new Date(expDate.exp * 1000);
        let today = new Date()
        if (today < newDate) {
            const response = await PostGetData.getUser(cookies.access_token)
            setUser(response.data)
            setUserUpdate(response.data)
        }
        else {
            const response = await PostGetData.postRefresh(cookies.refresh_token)
            setCookie('access_token', response.data.accessToken, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            setCookie('refresh_token', response.data.refreshToken, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
        }
        setIsLoading(false);
    }

    function handle(e){
        const newData = {...userUpdate};
        newData[e.target.id] = e.target.value;
        setUserUpdate(newData);
    }
    async function submit(e) {
        e.preventDefault();
        if (user.name !== userUpdate.name)
        {
            const response = await PostGetData.patchUserName(cookies.access_token, userUpdate.name)
            if (response.status !== 200) setErrorMessage(response.data?.message)
            else redirect ('/user/me')
        }
    }

    return (
        <div className='main-container' style={{alignItems: 'center', width: '100%'}}>
            <PartsHeader children={'Изменение профиля'} iconBtnStyle={{display: 'none'}} btnStyle={{display: 'none'}}/>
            <ScrollToTop/>
            {
                isLoading ? <Loader/> :
                    <>
                        <div className='profile-container'>
                            <img src={user.userpic} className='profile-userpic' style={{marginTop: '36px'}}/>
                            <form className='login-main-container' style={{padding: '36px 0'}} onSubmit={(e)=>submit(e)}>
                                <Field onChange={(e) => handle(e)} id={'email'} value={userUpdate.email} type={'text'} src={EmailIcon} placeholder={'Электронная почта'} style={{marginBottom: '16px'}}/>
                                <Field onChange={(e) => handle(e)} id={'name'} value={userUpdate.name} type={'text'} src={UserNameIcon} placeholder={'Псевдоним'} style={{marginBottom: '16px'}}/>
                                <Button type={'primary'} style={{marginBottom: '16px', width: '100%'}}>Сохранить изменения</Button>
                                <Button type={'secondary'} style={{width: '100%'}} clickHandler={() => redirect('/user/me')}>Отменить изменения</Button>
                            </form>
                            {
                                errorMessage ? <ErrorMessage>Ошибка внесения изменений: {errorMessage}</ErrorMessage> : false
                            }
                        </div>

                    </>
            }
        </div>
    );
};

export default ProfileEdit;