import React from 'react';
import './artistCard.css';
import LikeTag from "../../../../../../Components/likeTag/likeTag";
import {Link, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

const ArtistCard = ({post}) => {
    const [cookies] = useCookies(['access_token', 'refresh_token']);

    return (
        <Link to={`/person/${post.id}`} className='artistCard-container'>
            <div className='artistCard-workImage' style={{backgroundImage: `url("${post.previewWork}")`,
                backgroundSize: 'cover', backgroundPositionX: 'center', boxSizing: 'border-box'}}>
                {
                    cookies.access_token ?
                        <>
                            {
                                post?.liked === true ? <LikeTag/> : false
                            }
                        </> : false
                }
            </div>
            <div className='artistCard-personImage-container'>
                <img src={post.personpic} className='artistCard-personImage'/>
            </div>
            <div className='artistCard-description-container'>
                <div className='artistCard-personData-container'>
                    <div className='artistCard-personData-name'>{post.fullname}</div>
                    <div className='artistCard-personData-tags-container'>
                        {
                            post.tags?.map(tag => <div className='artistCard-personData-tags' key={tag.id}>{tag.title}</div>)
                        }
                    </div>
                </div>
                <div className='artistCard-personData-coverText'>{post.description}</div>
            </div>
        </Link>
    );
};

export default ArtistCard;