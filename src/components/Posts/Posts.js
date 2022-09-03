import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => setPosts(data?.data));
    },[])
    return (
        <div>
            <h2>Every posts we have: {posts.length}</h2>
            {
                posts.map(post => <Link to ={`/posts/${post.id}`}>{post.id} </Link>)
            }
            <Outlet />
        </div>
    );
};

export default Posts;