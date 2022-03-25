import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import PostGetData from "../../API/postGetData";
import Loader from "../../Components/Loader/loader";

const EventArticle = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const params = useParams();
    useEffect(() =>{
        fetchEvent(params.id)
    }, [])

    async function fetchEvent() {
        setIsLoading(true);
        const response = await PostGetData.getEventById(params.id)
        setPosts(response.data)
        setIsLoading(false);
    }
    return (
        <div className='main-container'>
            {
                isLoading ? <Loader/> :
                    <>
                        
                    </>
            }
        </div>
    );
};

export default EventArticle;