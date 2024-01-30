import React from 'react'
import { useState, useEffect } from 'react'
import PostItem from '../components/PostItem'
import { Dummy_posts } from '../data'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader'

const CategoryPost = () => {
    const [allPosts, setAllPosts] = useState(Dummy_posts)
    const [isLoading, setIsLoading] = useState(false);
    const { category } = useParams();

    useEffect(() => {
        const fetchPosts =  () => {
            setIsLoading(true)
            axios.get(`/api/v1/posts/categories/${category}`)
            .then(res => {
                setIsLoading(false);
                setAllPosts(res?.data.data);
            })
            .catch(err => {})
        }

        fetchPosts();
    }, [category])

    if(isLoading) return <Loader />
  return (
    <section>
        {allPosts.length>0 ? <div className="container posts__container">
            {
                allPosts.map(({_id: id, thumbnail, category, title, desc, creator, createdAt}) => <PostItem key={id}  id={id} thumbnail={thumbnail} title={title} category={category} desc={desc} creator={creator} createdAt={createdAt} />)
            }
        </div> : <h2 className='center'>No post found</h2>}
    </section>
  )
}

export default CategoryPost