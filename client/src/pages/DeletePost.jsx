import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext"
import { Link } from 'react-router-dom';
const DeletePost = ({postId}) => {
    const [posts, setPosts] = useState()
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        const token = currentUser?.refreshToken;
        if(!token) navigate("/login");
    }, [])

  return (
    <Link to={`/posts/${postId}/delete`} className='btn sm danger'>Delete</Link>
  )
}

export default DeletePost