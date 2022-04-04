import React,{useState, useEffect} from 'react';
import './artistArticle.css';
import {useCookies} from 'react-cookie';
import {useNavigate, useParams} from 'react-router-dom';
import PostGetData from '../../API/postGetData';
import Loader from "../../Components/Loader/loader";
import IconButton from "../../Components/IconButtons/iconButton";
import {
    CalloutSuccessIcon,
    InstagramIcon,
    LikeIcon,
    LikeIconUnfilled,
    ShareIcon,
    VkIcon,
    WebIcon
} from "../../Assets/variableSvg";
import PartsHeader from "../../Components/PartsHeader/partsHeader";
import ScrollToTop from "../../ScrollFunction/scrollToTop";
import Callout from "../../Components/Callout/callout";

const ArtistArticle = () => {
    const [post, setPost] = useState({});
    const [postWorks, setPostWorks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cookies] = useCookies(['access_token', 'refresh_token']);
    const [openDialog, setOpenDialog] = useState(false);
    const params = useParams();
    const redirect = useNavigate();

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
    async function setLike() {
        const response = await PostGetData.postLike(cookies.access_token, post.id);
        setPost({...post,  likes: response.data.likes, liked: response.data.liked});
    }
    function CopyToClipboard() {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setOpenDialog(true);
        setTimeout(function() {
            setOpenDialog(false);
        }.bind(this), 2000)
    }

    return (
        <div className='main-container' style={{maxWidth: '744px'}}>
            <ScrollToTop/>
            {
                isLoading ? <Loader/> :
                    <>
                        {
                            openDialog === true ? <Callout children={'Ссылка скопирована!'} src={CalloutSuccessIcon}/> : false
                        }
                        <div className='artistArticle-biography'>
                            <img src={post.personpic} className='artistArticle-biography-personPic'/>
                            <div className='artistArticle-biography-details'>
                                <div className='artistArticle-biography-details-name'>
                                    {post.fullname}
                                    <div className='artistArticle-btnIconContainer'>
                                        {
                                            cookies.access_token ?
                                                <>
                                                {
                                                    post?.liked === true ? <IconButton icon={LikeIcon} style={{backgroundColor: 'var(--quaternary'}} clickHandler={setLike}/> : <IconButton icon={LikeIconUnfilled} clickHandler={setLike}/>
                                                }
                                                </> : <IconButton icon={LikeIconUnfilled} clickHandler={() => redirect('/login')}/>
                                        }
                                        <IconButton icon={ShareIcon} style={{margin: '0'}} clickHandler={CopyToClipboard}/>
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
                                            work.description ? <div className='artistArticle-works-work-description'>{work.description}</div> : false
                                        }
                                        {
                                            work.pic ?
                                                <>
                                                    {
                                                        work.pic.map((art) => <img src={art} className='artistArticle-biography-personPic'/>)
                                                    }
                                                </> : work.video ?
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
                            post.socNetworks ?
                                <>
                                    <PartsHeader children={'Ссылки на артиста'} iconBtnStyle={{display: 'none'}} btnStyle={{display: 'none'}}/>
                                    <div className='artistArticle-socNetworks'>
                                        Подробнее с художником можно познакомиться по источникам ниже:
                                        {
                                            post.socNetworks.vk ?
                                                <div className='artistArticle-socNetworks-link-container'>
                                                    <img src={VkIcon} className='artistArticle-socNetworks-link-icon'/>
                                                    <a href={post.socNetworks.vk} className='artistArticle-socNetworks-link-a'>ВКонтакте</a>
                                                </div> : false
                                        }
                                        {
                                            post.socNetworks.instagram ?
                                                <div className='artistArticle-socNetworks-link-container'>
                                                    <img src={InstagramIcon} className='artistArticle-socNetworks-link-icon'/>
                                                    <a href={post.socNetworks.instagram} className='artistArticle-socNetworks-link-a'>Инстаграм</a>
                                                </div> : false
                                        }
                                        {
                                            post.socNetworks.site ?
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