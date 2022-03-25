import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './events.css';
import PartsHeader from '../PartsHeader/partsHeader';
import EventCard from './EventCard/eventCard';
import Button from '../../../../Components/Button/button';
import Loader from '../../../../Components/Loader/loader';

const Events = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const redirect = useNavigate();

    useEffect(() =>{
        fetchEvents()
    }, []);
    async function fetchEvents(){
        setIsLoading(true);
        const response = await axios.get('https://artartwebapp.herokuapp.com/event?take=6')
        setPosts(response.data[0])
        setIsLoading(false);
    }

    return (
        <div className='events-container'>
            {
                isLoading ? <Loader/> :
                    <>
                        <PartsHeader children={'Мероприятия'} btnText={'Смотреть всё'} iconBtnStyle={{display: 'none'}} btnClickHandler={() => redirect('/events')}/>
                        <div className='events-cards-container'>
                            {
                                posts.map(post => <EventCard post={post} key={post.id}/>)
                            }
                        </div>
                        <Button type={'secondary'} style={{marginTop: '24px'}} clickHandler={() => redirect('/events')}>Открыть мероприятия</Button>
                    </>
            }
        </div>
    );
};

export default Events;