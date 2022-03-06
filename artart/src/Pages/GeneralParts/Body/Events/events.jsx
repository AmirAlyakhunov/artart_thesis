import React from 'react';
import {useNavigate} from 'react-router-dom';
import './events.css';
import Button from "../../../../Components/Button/button";

const Events = () => {
    const navigate = useNavigate;
    function GoTo(){
        navigate('/eventPage');
    }

    return (
        <div className='events-container'>
            <div className='events-header'>
                Мероприятия
                <Button type={'tertiary'} onClick={GoTo}>Смотреть всё</Button>
            </div>
        </div>
    );
};

export default Events;