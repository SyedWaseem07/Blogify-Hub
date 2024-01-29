import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';

const PostAuthor = ({creator, createdAt}) => {
    const [author, setAuthor] = useState([])
    const timeago = moment(createdAt).fromNow();
    useEffect(() => {
        if(creator) {
            axios.get(`/api/v1/users/${creator}`)
        .then(res => {
            setAuthor(res.data.data);
        })
        .catch(err => {})
        }
    })

  return (
    <Link to={`/posts/user/sdfsgdv`} className="post__author">
        <div className="post__author-avatar">
            <img src={author.avatar} alt="" />
        </div>
        <div className="post__author-details">
            <h5>By : {author.name}</h5>
            <small> {timeago} </small>
        </div>
    </Link>
  )
}

export default PostAuthor
