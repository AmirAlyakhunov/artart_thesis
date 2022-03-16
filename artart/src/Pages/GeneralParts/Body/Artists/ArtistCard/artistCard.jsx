import React from 'react';
import './artistCard.css';
import LikeTag from "../../../../../Components/likeTag/likeTag";
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

        </Link>
    );
};

export default ArtistCard;