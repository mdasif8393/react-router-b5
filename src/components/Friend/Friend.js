import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, id} = friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        navigate(`/friend/${id}`)
    }
    return (
        <div>
            <h3>{name}: {id}</h3>
            <button onClick={showFriendDetail}>{name} id:{id}</button>
        </div>
    );
};

export default Friend;