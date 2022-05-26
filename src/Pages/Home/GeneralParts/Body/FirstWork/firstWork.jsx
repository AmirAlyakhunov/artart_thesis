import React, {useEffect, useState} from 'react';
import './firstWork.css';
import Loader from "../../../../../Components/Loader/loader";
import {Link} from "react-router-dom";
import axios from 'axios';

const FirstWork = () => {
    const [post, setPost] = useState({});
    const [work, setWork] = useState([]);

    const [post1, setPost1] = useState({});
    const [post2, setPost2] = useState({});
    const [post3, setPost3] = useState({});
    const [post4, setPost4] = useState({});

    const [work1, setWork1] = useState([]);
    const [work2, setWork2] = useState([]);
    const [work3, setWork3] = useState([]);
    const [work4, setWork4] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        fetchMainPerson()
        fetchPerson1()
        fetchPerson2()
        fetchPerson3()
        fetchPerson4()
    }, []);

    async function fetchMainPerson(){
        setIsLoading(true);
        const response = await axios.get('https://artartwebapp.herokuapp.com/api/person/1')
        setPost(response.data)
        const responseArt = await axios.get('https://artartwebapp.herokuapp.com/api/art/11')
        setWork(responseArt.data)
        setIsLoading(false);
    }

    async function fetchPerson1(){
        setIsLoading(true);
        const response = await axios.get('https://artartwebapp.herokuapp.com/api/person/9')
        setPost1(response.data)
        const responseArt = await axios.get('https://artartwebapp.herokuapp.com/api/art/17')
        setWork1(responseArt.data)
        setIsLoading(false);
    }
    async function fetchPerson2(){
        setIsLoading(true);
        const response = await axios.get('https://artartwebapp.herokuapp.com/api/person/13')
        setPost2(response.data)
        const responseArt = await axios.get('https://artartwebapp.herokuapp.com/api/art/29')
        setWork2(responseArt.data)
        setIsLoading(false);
    }
    async function fetchPerson3(){
        setIsLoading(true);
        const response = await axios.get('https://artartwebapp.herokuapp.com/api/person/15')
        setPost3(response.data)
        const responseArt = await axios.get('https://artartwebapp.herokuapp.com/api/art/42')
        setWork3(responseArt.data)
        setIsLoading(false);
    }
    async function fetchPerson4(){
        setIsLoading(true);
        const response = await axios.get('https://artartwebapp.herokuapp.com/api/person/4')
        setPost4(response.data)
        const responseArt = await axios.get('https://artartwebapp.herokuapp.com/api/art/5')
        setWork4(responseArt.data)
        setIsLoading(false);
    }

    return (
        <div className='fw-main-container'>
            {
                isLoading ? <Loader/> :
                    <>
                        <Link to ={`/person/${post.id}`} className='fw-imgContainer' style={{backgroundImage: `linear-gradient(179.92deg, rgba(0, 0, 0, 0.7) 0.07%, rgba(0, 0, 0, 0) 70.02%), url("${post.previewWork}")`,
                            backgroundSize: 'cover', backgroundPositionX: 'center'}}>
                            <h1 className='fw-title'>{work.title}</h1>
                            <div className='fw-authorContainer'>
                                <img src={post.personpic} alt='Author Pic' className='fw-authorPic'/>
                                {post.fullname}
                            </div>
                        </Link>
                        <div className='fw-container-secondary'>
                            <Link to={`/person/${post1.id}`} className='fw-imgContainer-secondary' style={{backgroundImage: `linear-gradient(179.92deg, rgba(0, 0, 0, 0.7) 0.07%, rgba(0, 0, 0, 0) 70.02%), url("${post1.previewWork}")`,
                                backgroundSize: 'cover', backgroundPositionX: 'center'}}>
                                <h1 className='fw-title-secondary'>{work1.title}</h1>
                                <div className='fw-authorContainer-secondary'>
                                    {post1.fullname}
                                </div>
                            </Link>
                            <Link to={`/person/${post2.id}`} className='fw-imgContainer-secondary' style={{backgroundImage: `linear-gradient(179.92deg, rgba(0, 0, 0, 0.7) 0.07%, rgba(0, 0, 0, 0) 70.02%), url("${post2.previewWork}")`,
                                backgroundSize: 'cover', backgroundPositionX: 'center'}}>
                                <h1 className='fw-title-secondary'>{work2.title}</h1>
                                <div className='fw-authorContainer-secondary'>
                                    {post2.fullname}
                                </div>
                            </Link>
                            <Link to={`/person/${post3.id}`} className='fw-imgContainer-secondary' style={{backgroundImage: `linear-gradient(179.92deg, rgba(0, 0, 0, 0.7) 0.07%, rgba(0, 0, 0, 0) 70.02%), url("${post3.previewWork}")`,
                                backgroundSize: 'cover', backgroundPositionX: 'center'}}>
                                <h1 className='fw-title-secondary'>{work3.title}</h1>
                                <div className='fw-authorContainer-secondary'>
                                    {post3.fullname}
                                </div>
                            </Link>
                            <Link to={`/person/${post4.id}`} className='fw-imgContainer-secondary' style={{backgroundImage: `linear-gradient(179.92deg, rgba(0, 0, 0, 0.7) 0.07%, rgba(0, 0, 0, 0) 70.02%), url("${post4.previewWork}")`,
                                backgroundSize: 'cover', backgroundPositionX: 'center'}}>
                                <h1 className='fw-title-secondary'>{work4.title}</h1>
                                <div className='fw-authorContainer-secondary'>
                                    {post4.fullname}
                                </div>
                            </Link>
                        </div>
                    </>
            }

        </div>

    );
};

export default FirstWork;