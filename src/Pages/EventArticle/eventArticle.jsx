import React, {useState, useEffect} from 'react';
import './eventArticle.css';
import {useParams} from "react-router-dom";
import PostGetData from "../../API/postGetData";
import Loader from "../../Components/Loader/loader";
import ScrollToTop from "../../ScrollFunction/scrollToTop";

const EventArticle = () => {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const params = useParams();
    useEffect(() =>{
        fetchEvent(params.id)
    }, [])

    async function fetchEvent() {
        setIsLoading(true);
        const response = await PostGetData.getEventById(params.id)
        setPost(response.data)
        setIsLoading(false);
    }
    return (
        <div className='main-container' style={{maxWidth: '744px'}}>
            <ScrollToTop/>
            {
                isLoading ? <Loader/> :
                    <>
                        <div className='eventArticle-image-container'>
                            {
                                post.pics?.map((pic) => <img src={pic} className='eventArticle-image' key={post.id}/>)
                            }
                        </div>
                        <div className='eventArticle-title'>{post.title}</div>
                        <div className='eventArticle-description'>{post.description}</div>
                        <div className='eventArticle-eventDetails'><strong className='eventArticle-eventDetails-strong'>Дата проведения:</strong>{post.startDate} — {post.endDate}</div>
                        <div className='eventArticle-eventDetails'><strong className='eventArticle-eventDetails-strong'>Место проведения:</strong>{post.place}</div>
                    </>
            }
        </div>
    );
};

export default EventArticle;