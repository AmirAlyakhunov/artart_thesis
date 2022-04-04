import React, {useState} from 'react';
import Logotype from "../../../../Components/Logotype/logotype";
import './header.css';
import IconButton from "../../../../Components/IconButtons/iconButton";
import {SearchIcon, MenuIcon} from "../../../../Assets/variableSvg";
import Field from "../../../../Components/Field/field";
import Button from "../../../../Components/Button/button";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import SearchResultDesktop from "../../../../Components/SearchResult/searchResultDesktop";
import SearchResultMobile from "../../../../Components/SearchResult/SearchResultMobile/searchResultMobile";
import MenuMobile from "../../../MenuMobile/menuMobile";
import PostGetData from "../../../../API/postGetData";

const Header = () => {
    const [isSearch, setIsSearch] = useState(false);
    const handleSearchFocus = () => {
        setIsSearch(true)
    }
    const handleSearchGoTo = () => {
        setIsSearch(false);
        setTimeout(() => {  window.location.reload()  }, 10);
    }
    const handleSearchClose = () => {
        setIsSearch(false);
    }
    const [value, setValue] = useState({query:''})

    const [cookies, setCookie, removeCookie]  = useCookies(['access_token', 'refresh_token']);
    const [user, setUser] = useState({});
    const redirect = useNavigate();

    const [isSearchMobileOpen, setIsSearchMobileOpen] = useState(false);
    const handleSearchMobileOpen = () => {
        setIsSearchMobileOpen(true);
    }
    const handleSearchMobileClose = () => {
        setIsSearchMobileOpen(false);
    }
    const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
    const handleMenuMobileOpen = () => {
        setIsMenuMobileOpen(true);
    }
    const handleMenuMobileClose = () => {
        setIsMenuMobileOpen(false);
    }

    async function Logout(){
        const response = await PostGetData.postRefresh(cookies.refresh_token)
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
        <>
            {
                isSearchMobileOpen === true ? <SearchResultMobile clickHandler={handleSearchMobileClose}/> : false
            }
            {
                isMenuMobileOpen === true ? <MenuMobile clickHandler={handleMenuMobileClose}/> : false
            }

            <div className='header-container'>
                <div className='header-main-container'>
                    <Logotype/>
                    <div className='header-main-actionsDesktop-container'>
                        <Field src={SearchIcon} placeholder={'Поиск артистов'} type={'text'} style={{margin: '0 16px'}} onFocus={handleSearchFocus}
                               value={value.query} onChange={(event) => setValue({...value, query: event.target.value})}/>
                        {
                            isSearch !== true ? false : <SearchResultDesktop onClick={handleSearchGoTo} value={value} toClose={handleSearchClose}/>
                        }
                        <Button type={'tertiary'} style={{marginRight: '16px'}} clickHandler={() => redirect('/events')}>Мероприятия</Button>
                        <Button type={'tertiary'} style={{marginRight: '16px'}} clickHandler={() => redirect('/persons')}>Справочник</Button>
                        {
                            cookies.access_token ?
                                <>
                                    <Button type={'tertiary'} style={{marginRight: '16px'}} clickHandler={() => redirect('user/me')}>Мой профиль</Button>
                                    <Button type={'secondary'} clickHandler={Logout}>Выйти</Button>
                                </> :
                                <>
                                    <Button type={'tertiary'} style={{marginRight: '16px'}} clickHandler={() => redirect('/login')}>Мой профиль</Button>
                                    <Button type={'primary'} clickHandler={() => redirect('/login')}>Войти</Button>
                                </>
                        }
                    </div>

                    <div className='btnIconContainer'>
                        <IconButton icon={SearchIcon} clickHandler={handleSearchMobileOpen}/>
                        <IconButton icon={MenuIcon} style={{margin: '0'}} clickHandler={handleMenuMobileOpen}/>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Header;