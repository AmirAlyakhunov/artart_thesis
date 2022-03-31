import React,{useState, useEffect} from 'react';
import './artistArticle.css';
import {useCookies} from 'react-cookie';
import {useNavigate, useParams} from 'react-router-dom';
import PostGetData from '../../API/postGetData';
import Loader from "../../Components/Loader/loader";
import IconButton from "../../Components/IconButtons/iconButton";
import {
    InstagramIcon,
    LikeIcon,
    LikeIconUnfilled,
    MenuIcon,
    SearchIcon,
    ShareIcon,
    VkIcon, WebIcon
} from "../../Assets/variableSvg";
import PartsHeader from "../../Components/PartsHeader/partsHeader";
import ScrollToTop from "../../ScrollFunction/scrollToTop";

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
        setPostWorks(response.data['arts'])
    }

    return (
        <div className='main-container' style={{maxWidth: '744px'}}>
            <ScrollToTop/>
            {
                isLoading ? <Loader/> :
                    <>
                        <div className='artistArticle-biography'>
                            <img src={post.personpic} className='artistArticle-biography-personPic'/>
                            <div className='artistArticle-biography-details'>
                                <div className='artistArticle-biography-details-name'>
                                    {post.fullname}
                                    <div className='btnIconContainer'>
                                        <IconButton icon={LikeIconUnfilled}/>
                                        <IconButton icon={ShareIcon} style={{margin: '0'}}/>
                                    </div>
                                </div>
                                <div className='artistCard-personData-tags-container'>
                                    {
                                        post.tags?.map(tag => <div className='artistCard-personData-tags' key={tag.id}>{tag.title}</div>)
                                    }
                                </div>
                            </div>
                            <div className='artistArticle-biography-description'>
                                {post.description}
                            </div>
                        </div>
                        <PartsHeader children={'Работы'} iconBtnStyle={{display: 'none'}} btnStyle={{display: 'none'}}/>
                        <div className='artistArticle-works'>
                            {
                                postWorks.map((work) =>
                                    <div className='artistArticle-works-work-container'>
                                        <div className='artistArticle-works-work-header'>
                                            {work.title}
                                        </div>
                                        {
                                            work.description != null ? <div className='artistArticle-works-work-description'>{work.description}</div> : false
                                        }
                                        {
                                            work.pic != null ?
                                                <>
                                                    {
                                                        work.pic.map((art) => <img src={art} className='artistArticle-biography-personPic'/>)
                                                    }
                                                </> : work.video != null ?
                                                <>
                                                    {
                                                        work.video.map((artVideo) => <iframe src={artVideo} className='artistArticle-works-work-videoIframe' scrolling='no'/>)
                                                    }
                                                </> : false
                                        }
                                    </div>
                                )
                            }
                        </div>
                        {
                            post.socNetworks != null ?
                                <>
                                    <PartsHeader children={'Ссылки на артиста'} iconBtnStyle={{display: 'none'}} btnStyle={{display: 'none'}}/>
                                    <div className='artistArticle-socNetworks'>
                                        Подробнее с художником можно познакомиться по источникам ниже:
                                        {
                                            post.socNetworks.vk !=null ?
                                                <div className='artistArticle-socNetworks-link-container'>
                                                    <img src={VkIcon} className='artistArticle-socNetworks-link-icon'/>
                                                    <a href={post.socNetworks.vk} className='artistArticle-socNetworks-link-a'>ВКонтакте</a>
                                                </div> : false
                                        }
                                        {
                                            post.socNetworks.instagram !=null ?
                                                <div className='artistArticle-socNetworks-link-container'>
                                                    <img src={InstagramIcon} className='artistArticle-socNetworks-link-icon'/>
                                                    <a href={post.socNetworks.instagram} className='artistArticle-socNetworks-link-a'>Инстаграм</a>
                                                </div> : false
                                        }
                                        {
                                            post.socNetworks.site !=null ?
                                                <div className='artistArticle-socNetworks-link-container'>
                                                    <img src={WebIcon} className='artistArticle-socNetworks-link-icon'/>
                                                    <a href={post.socNetworks.site} className='artistArticle-socNetworks-link-a'>Веб-сайт</a>
                                                </div> : false
                                        }
                                    </div>
                                </> : false
                        }
                    </>
            }
        </div>
    );
};

export default ArtistArticle;