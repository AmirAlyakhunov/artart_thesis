import React from 'react';
import './button.css';

const Button = ({type, children}) => {
    return (
        <button className={`button-${type}`}>
            {children}
        </button>
    );
};

export default Button;