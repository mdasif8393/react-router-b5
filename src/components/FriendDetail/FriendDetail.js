import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {id} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(data => setFriend(data.data));
    },[])
    
    return (
        <div>
            <h1>Detail: {id}</h1>
            <h2>{friend.name}</h2>
            <h3>{friend.email}</h3>
        </div>
    );
};

export default FriendDetail;