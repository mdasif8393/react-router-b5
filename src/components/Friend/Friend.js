import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, id} = friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        navigate(`/friend/${id}`)
    }
    return (
        <div>
            <h3>{name}: {id}</h3>
            <Link to={`/friend/${id}`}>See Friend</Link> <br />
            <button onClick={showFriendDetail}>{name} id:{id}</button>
        </div>
    );
};

export default Friend;