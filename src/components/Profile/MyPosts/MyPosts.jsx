import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostForm from './PostForm/PostForm'

const MyPosts = (props) => {
  
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

  return (
    <div className={s.postsBlock}>
      <div>
        <h2>My posts</h2>
        <PostForm addPost={props.addPost} />
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;