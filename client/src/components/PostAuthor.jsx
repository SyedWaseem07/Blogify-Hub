import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'
const PostAuthor = () => {
  return (
    <Link to={`/posts/user/sdfsgdv`} className="post__author">
        <div className="post__author-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post__author-details">
            <h5>By : Sunil Chettri</h5>
            <p>Just Now</p>
        </div>
    </Link>
  )
}

export default PostAuthor