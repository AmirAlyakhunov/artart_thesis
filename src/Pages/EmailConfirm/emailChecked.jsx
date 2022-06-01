import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import ApiData from "../../API/apiData";
import Loader from "../../Components/Loader/loader";
import SuccessWin from "../../Components/SuccessResetWin/successWin";

const EmailChecked = () => {
    const redirect = useNavigate();
    const params = useParams();
    const [successChecked, setSuccessChecked] = useState(false);
    useEffect(() =>{
        fetchEvent(params.token)
    }, [])

    async function fetchEvent() {
        const response = await ApiData.postConfirmEmail(params.token)
        if(response.status === 201) setSuccessChecked(true)
    }
    return (
        <div style={{height: 'calc(100vh - 344px)'}}>
            {
                successChecked ? <SuccessWin clickRedirect={() => redirect('/login')} successLinkText={'Войти в систему'} successText={'Ваша почта подтверждена'}/> : false
            }
        </div>
    );
};

export default EmailChecked;