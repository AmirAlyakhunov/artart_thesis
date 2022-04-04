import React from 'react';
import './menuMobile.css';
import Logotype from "../../Components/Logotype/logotype";
import IconButton from "../../Components/IconButtons/iconButton";
import {CloseIcon} from "../../Assets/variableSvg";
import MenuLink from "./menuLink/menuLink";
import {useCookies} from "react-cookie";
import Button from "../../Components/Button/button";
import {useNavigate} from "react-router-dom";

const MenuMobile = ({clickHandler}) => {
    const cookies  = useCookies(['access_token']);
    const redirect = useNavigate();
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
                        cookies.access_token ? <MenuLink to={'/'} clickHandler={clickHandler}>Мой профиль</MenuLink> : <MenuLink to={'/login'} clickHandler={clickHandler}>Мой профиль</MenuLink>
                    }
                </div>
                <Button type={'primary'} clickHandler={() => redirect('/login')} style={{marginBottom: '8px'}}>Войти в аккаунт</Button>
                <Button type={'tertiary'} clickHandler={() => redirect('/signup')}>Зарегистрироваться</Button>
            </div>
        </div>
    );
};

export default MenuMobile;