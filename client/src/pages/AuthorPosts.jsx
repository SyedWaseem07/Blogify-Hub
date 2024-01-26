import React from 'react'
import { useState } from 'react'
import PostItem from '../components/PostItem'
import { Dummy_posts } from '../data'

const AuthorPosts = () => {
    const [allPosts, setAllPosts] = useState(Dummy_posts)
  return (
    <section>
        {allPosts.length>0 ? <div className="container posts__container">
            {
                allPosts.map(({id, thumbnail, category, title, desc, authorId}) => <PostItem key={id}  id={id} thumbnail={thumbnail} title={title} category={category} desc={desc} authorId={authorId} />)
            }
        </div> : <h2 className='center'>No post found</h2>}
    </section>
  )
}

export default AuthorPosts