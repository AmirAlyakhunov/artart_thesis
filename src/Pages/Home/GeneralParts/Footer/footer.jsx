import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';
import {ArtLogoFooter} from "../../../../Assets/variableSvg";
import {useCookies} from "react-cookie";

const Footer = () => {
    const cookies  = useCookies(['access_token']);
    return (
        <div className='footer-container'>
            <div className='footer-link-container'>
                <Link to={'/'} className='footer-link'>Главная</Link>
                <Link to={'/events'} className='footer-link'>Мероприятия</Link>
                <Link to={'/persons'} className='footer-link'>Справочник</Link>
                {
                    cookies.access_token ? <Link to={'/'} className='footer-link'>Мой профиль</Link> : <Link to={'/login'} className='footer-link'>Мой профиль</Link>
                }

            </div>
            <div className='footer-details-container'>
                <div className='footer-details-owners-container'>
                    <a href={'https://github.com/AmirAlyakhunov'} className='footer-details-owners'>Design / Front-end: Аляхунов Амир</a>
                    <a href={'https://github.com/KotletoVM'} className='footer-details-owners'>Back-end / DB: Позняк Михаил</a>
                </div>
                <img src={ArtLogoFooter}/>
            </div>
        </div>
    );
};

export default Footer;