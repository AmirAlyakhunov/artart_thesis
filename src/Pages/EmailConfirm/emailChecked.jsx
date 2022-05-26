import React,{useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import PostGetData from "../../API/postGetData";
import Loader from "../../Components/Loader/loader";

const EmailChecked = () => {
    const redirect = useNavigate();
    const params = useParams();
    useEffect(() =>{
        fetchEvent(params.token)
    }, [])

    async function fetchEvent() {
        const response = await PostGetData.postConfirmEmail(params.token)
        if(response.status === 201) redirect('/user/me', {replace: true})
    }
    return (
        <div style={{height: 'calc(100vh - 344px)'}}>
            <Loader/>
        </div>
    );
};

export default EmailChecked;