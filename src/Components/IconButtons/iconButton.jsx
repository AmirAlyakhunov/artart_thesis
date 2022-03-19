import React from 'react';
import './iconButton.css';

const IconButton = ({icon, clickHandler, style}) => {
    return (
        <button className='container' style={style} onClick={clickHandler}>
            <img src={icon} alt="btnIcon"/>
        </button>
    );
};

export default IconButton;