import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PostItem from '../../components/PostItem/PostItem';
import { useGetPostByIdQuery } from '../../services/apiSlice';

const Post = () => {
    const {id} = useParams();
    const { data: post, error, isLoading } = useGetPostByIdQuery(id);

    

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    

    return (
        <div>
            <PostItem id={post.id} title={post.title} body={post.body} isChecked={true}/>
            <Link to={`/`} >Назад</Link>
        </div>
    );
};

export default Post;