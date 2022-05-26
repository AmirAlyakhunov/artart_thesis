import React from 'react';
import {CalloutSuccessBigIcon} from "../../Assets/variableSvg";
import './successWin.css'
import Button from "../Button/button";


const SuccessWin = ({clickRedirect, successText, successLinkText}) => {

    return (
        <div className='successResetWin-container'>
            <img src={CalloutSuccessBigIcon}/>
            <div className='login-main-title' style={{textAlign: 'center', marginTop: '16px'}}>{successText}</div>
            <Button type={'tertiary'} clickHandler={clickRedirect}>{successLinkText}</Button>
        </div>
    );
};

export default SuccessWin;