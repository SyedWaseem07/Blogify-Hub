import React from 'react'
import { useState } from 'react'
import PostItem from './PostItem'
import { Dummy_posts } from '../data'
import { useEffect } from 'react'
import Loader from "../pages/Loader"
import axios from "axios"

const Posts = () => {
    const [allPosts, setallPosts] = useState(Dummy_posts);
    const [isLoading, setIsLodaing] = useState(false);

    useEffect(() => {
        const fetchPosts =  () => {
            setIsLodaing(true)
            axios.get(`/api/v1/posts/`)
            .then(res => {
                setIsLodaing(false);
                console.log(res.data.data);
                setallPosts(res?.data.data);
            })
            .catch(err => {})
        }

        fetchPosts();
    }, [])

    if(isLoading) return <Loader />
  return (
    <section className='posts'>
        {allPosts.length>0 ? <div className="container posts__container">
            {
                allPosts.map(({_id: id, thumbnail, category, title, desc, creator, createdAt}) => <PostItem key={id}  id={id} thumbnail={thumbnail} title={title} category={category} desc={desc} creator={creator} createdAt={createdAt} />)
            }
        </div> : <h2 className='center'>No post found</h2>}
    </section>
  )
}

export default Posts