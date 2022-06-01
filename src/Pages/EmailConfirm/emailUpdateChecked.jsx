import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import ApiData from "../../API/apiData";
import SuccessWin from "../../Components/SuccessResetWin/successWin";
import {useCookies} from "react-cookie";

const EmailUpdateChecked = () => {
    const redirect = useNavigate();
    const params = useParams();
    const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'refresh_token']);
    const [successChecked, setSuccessChecked] = useState(false);
    useEffect(() =>{
        fetchEvent(params.token)
    }, [])

    async function fetchEvent() {
        const response = await ApiData.updateEmail(cookies.access_token, params.token)
        if(response.status === 200)
        {
            setSuccessChecked(true)
            removeCookie("access_token", {path: '/'})
            removeCookie("refresh_token", {path: '/'})
        }
    }
    return (
        <div style={{height: 'calc(100vh - 344px)'}}>
            {
                successChecked ? <SuccessWin clickRedirect={() => redirect('/login')} successLinkText={'Войти в систему'} successText={'Ваша почта подтверждена'}/> : false
            }
        </div>
    );
};

export default EmailUpdateChecked;