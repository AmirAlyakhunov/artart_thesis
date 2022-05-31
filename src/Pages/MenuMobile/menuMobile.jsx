import React from 'react';
import './menuMobile.css';
import Logotype from "../../Components/Logotype/logotype";
import IconButton from "../../Components/IconButtons/iconButton";
import {CloseIcon} from "../../Assets/variableSvg";
import MenuLink from "./menuLink/menuLink";
import {useCookies} from "react-cookie";
import Button from "../../Components/Button/button";
import {useNavigate} from "react-router-dom";
import PostGetData from "../../API/postGetData";

const MenuMobile = ({clickHandler}) => {
    const [cookies, setCookie, removeCookie]  = useCookies(['access_token', 'refresh_token']);
    const redirect = useNavigate();
    async function Logout(){
        const response = await PostGetData.postLogout(cookies.access_token)
        setCookie('access_token', response.data, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
        if (cookies) {
            removeCookie("access_token", {path: '/'})
            removeCookie("refresh_token", {path: '/'})
        }
        redirect ('/login', {replace: true})
    }

    return (
        <div className='menu-mobile-container'>
            <div className='login-header'>
                <Logotype/>
                <IconButton icon={CloseIcon} clickHandler={clickHandler} style={{marginRight: '0'}}/>
            </div>
            <div className='menu-mobile-main-container'>
                <div className='menu-mobile-linkContainer'>
                    <MenuLink to={'/'} clickHandler={clickHandler}>Главная</MenuLink>
                    <MenuLink to={'/events'} clickHandler={clickHandler}>Мероприятия</MenuLink>
                    <MenuLink to={'/persons'} clickHandler={clickHandler}>Справочник</MenuLink>
                    {
                        cookies.access_token ? <MenuLink to={'/user/me'} clickHandler={clickHandler}>Мой профиль</MenuLink> : <MenuLink to={'/login'} clickHandler={clickHandler}>Мой профиль</MenuLink>
                    }
                </div>
                {
                    cookies.access_token ? <Button type={'secondary'} clickHandler={Logout} style={{marginBottom: '8px', width: '100%'}}>Выйти из аккаунта</Button> :
                        <>
                            <Button type={'primary'} clickHandler={() => redirect('/login')} style={{marginBottom: '8px', width: '100%'}}>Войти в аккаунт</Button>
                            <Button type={'tertiary'} clickHandler={() => redirect('/signup')}>Зарегистрироваться</Button>
                        </>
                }

            </div>
        </div>
    );
};

export default MenuMobile;