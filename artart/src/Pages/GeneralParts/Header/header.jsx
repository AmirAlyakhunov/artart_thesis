import React from 'react';
import Logotype from "../../../Components/Logotype/logotype";
import './header.css';
import IconButton from "../../../Components/IconButtons/iconButton";
import {SearchIcon, MenuIcon} from "../../../Assets/variableSvg";

const Header = () => {
    return (
        <div className='header-container'>
            <Logotype/>
            <div className='btnIconContainer'>
                <IconButton icon={SearchIcon}/>
                <IconButton icon={MenuIcon} style={{margin: '0'}}/>
            </div>
        </div>
    );
};

export default Header;