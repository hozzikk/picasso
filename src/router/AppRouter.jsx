import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import PostDetail from '../pages/PostDetail/PostDetail';

const AppRouter = () => {
    return (
            <Routes>
                <Route element={<Home />} path='/'/>
                <Route element={<PostDetail />} path='/posts/:id'/>

                <Route path='*' element={<div>Not found...</div>}/>
            </Routes>
    );
};

export default AppRouter;