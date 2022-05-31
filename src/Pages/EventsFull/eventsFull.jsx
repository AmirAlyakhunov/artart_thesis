import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from "../../Components/Loader/loader";
import PartsHeader from "../../Components/PartsHeader/partsHeader";
import EventCard from "../Home/GeneralParts/Body/Events/EventCard/eventCard";

const EventsFull = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        fetchEvents()
    }, []);
    async function fetchEvents(){
        setIsLoading(true);
        const response = await axios.get('https://artartwebapp.herokuapp.com/api/event?take=14')
        setPosts(response.data['events'])
        setIsLoading(false);
    }

    return (
        <div className='main-container'>
            {
                isLoading ? <Loader/> :
                    <>
                        <PartsHeader children={'Мероприятия'} iconBtnStyle={{display: 'none'}} btnStyle={{display: 'none'}}/>
                        <div className='events-cards-container'>
                            {
                                posts.map(post => <EventCard post={post} key={post.id}/>)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default EventsFull;