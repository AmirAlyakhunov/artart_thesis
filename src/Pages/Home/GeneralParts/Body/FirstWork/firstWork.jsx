import React, {useEffect, useState} from 'react';
import './firstWork.css';
import Loader from "../../../../../Components/Loader/loader";
import {Link} from "react-router-dom";
import axios from 'axios';

const FirstWork = () => {
    const [post, setPost] = useState({});
    const [work, setWork] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        fetchPerson()
    }, []);

    async function fetchPerson(){
        setIsLoading(true);
        const response = await axios.get('https://artartwebapp.herokuapp.com/person/1')
        setPost(response.data)
        const responseArt = await axios.get('https://artartwebapp.herokuapp.com/art/11')
        setWork(responseArt.data)
        setIsLoading(false);
    }

    return (
        <Link to ={`/person/${post.id}`} className='fw-imgContainer' style={{backgroundImage: `linear-gradient(179.92deg, rgba(0, 0, 0, 0.7) 0.07%, rgba(0, 0, 0, 0) 70.02%), url("${post.previewWork}")`,
            backgroundSize: 'cover', backgroundPositionX: 'center'}}>
            {
                isLoading ? <Loader/> :
                    <>
                        <h1 className='fw-title'>{work.title}</h1>
                        <div className='fw-authorContainer'>
                            <img src={post.personpic} alt='Author Pic' className='fw-authorPic'/>
                            {post.fullname}
                        </div>
                    </>
            }
        </Link>
    );
};

export default FirstWork;