import React from 'react';
import './button.css';

const Button = ({type, children, style, clickHandler}) => {
    return (
        <button className={`button-${type}`} style={style} onClick={clickHandler}>
            {children}
        </button>
    );
};

export default Button;
