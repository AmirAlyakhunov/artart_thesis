import React from 'react';
import './errorMessage.css';

const ErrorMessage = ({children}) => {
    return (
        <div className='errorMessage-container'>
            {children}
        </div>
    );
};

export default ErrorMessage;