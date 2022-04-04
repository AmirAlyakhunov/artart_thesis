import React from 'react';
import './menuLink.css';
import {Link} from "react-router-dom";

const MenuLink = ({children, to, clickHandler}) => {
    return (
        <Link to={to} className='menu-link' onClick={clickHandler}>
            {children}
        </Link>
    );
};

export default MenuLink;