import React,{useState, useEffect} from 'react';
import './artistArticle.css';
import {useCookies} from 'react-cookie';
import {useNavigate, useParams} from 'react-router-dom';
import PostGetData from '../../API/postGetData';
import Loader from "../../Components/Loader/loader";

const ArtistArticle = () => {
    const [post, setPost] = useState({});
    const [postWorks, setPostWorks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cookies] = useCookies(['access_token', 'refresh_token']);
    const params = useParams();

    useEffect(() =>{
        Artist(params.id)
        Works(params.id)
    }, [])

    async function Artist() {
        setIsLoading(true);
        if(!cookies.access_token){
            const response = await PostGetData.getById(params.id)
            setPost(response.data)
        }
        else{
            const response = await PostGetData.getById(params.id, cookies.access_token)
            setPost(response.data)
        }
        setIsLoading(false);
    }
    async function Works(){
        const response = await PostGetData.getWorkById(params.id)
        setPostWorks(response.data)
    }

    return (
        <div className='main-container' style={{maxWidth: '744px'}}>
            {
                isLoading ? <Loader/> :
                    <>
                        <img src={post.personpic} className='artistArticle-personPic'/>
                    </>
            }
        </div>
    );
};

export default ArtistArticle;