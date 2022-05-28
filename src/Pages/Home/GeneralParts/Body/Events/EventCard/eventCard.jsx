import React from 'react';
import './eventCard.css';
import {Link} from 'react-router-dom';

const EventCard = ({post}) => {
    return (
        <Link to={`/event/${post.id}`} className='eventCard-container' style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8) 2.4%, rgba(0, 0, 0, 0) 76.67%), url("${post.pics[0]}")`,
            backgroundSize: 'cover', backgroundPositionX: 'center'}}>
            <div className='eventCard-title'>{post.title}</div>
            <div className='eventCard-date'>{post?.startDate} — {post?.endDate}</div>
        </Link>
    );
};

export default EventCard;