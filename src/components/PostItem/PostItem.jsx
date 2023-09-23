import React from 'react';
import './PostItem.css';
import { Link } from 'react-router-dom';

const PostItem = ({title, body, id, isChecked}) => {
    return (
        <div className='post'>
            <strong>{id}. {title}</strong>
            <div style={isChecked ? null : {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'

            }}>{body}</div>
            {isChecked 
                ? null
                : <Link to={`/posts/${id}`}>Просмотр</Link>
            }
        </div>
    );
};

export default PostItem;