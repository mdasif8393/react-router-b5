import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({});
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(data => setPost(data.data))
    },[postId])
    console.log(post)
    return (
        <div>
            <h3>Post Detail: {postId}</h3>
            <h2>Title;{post.title}</h2>
            <p>Body:{post.body}</p>
        </div>
    );
};

export default PostDetail;