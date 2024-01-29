import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dummy_posts } from '../data'
import { UserContext } from '../context/UserContext'

const DashBoard = () => {
    const [posts, setPosts] = useState(Dummy_posts)
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        const token = currentUser?.refreshToken;
        if(!token) navigate("/login");
    }, [])
  return (
    <section className="dashboard">
        {
            posts.length ? <div className="container dashboard__container">
                {
                    posts.map(post => <article className='dashboard__post' key={post.id}>
                        <div className="dashboard__post-info">
                            <div className="dashboard__post-thumbnail">
                                <img src={post.thumbnail} alt="post thumbnail" />
                            </div>
                            <h5>{post.title}</h5>
                        </div>
                        <div className="dashboard__post-actions">
                            <Link to={`/posts/${post.id}`} className='btn sm' >View</Link>
                            <Link to={`/posts/${post.id}/edit`} className='btn sm primary' >Edit</Link>
                            <Link to={`/posts/${post.id}/delete`} className='btn sm danger' >Delete</Link>
                        </div>
                    </article>)
                }
            </div> : <h2 className='center'>You have no posts</h2>
        }
    </section>
  )
}

export default DashBoard