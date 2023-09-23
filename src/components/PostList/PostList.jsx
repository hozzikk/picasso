import React, { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../../services/apiSlice';
import PostItem from '../PostItem/PostItem';

import './PostList.css';


function PostList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useGetPostsQuery(currentPage);


  useEffect(() => {
    function handleScroll() {
      if (
       ( window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight)
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}

return (
  <div className='postList'>
    {data && data.map((post) => (
      <PostItem key={post.id} id={post.id} title={post.title} body={post.body} isChecked={false} />
    ))}
  </div>
);
}

export default PostList;


