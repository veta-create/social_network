import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'

const MyPosts = (props) => {

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = (e) => {
    let text = e.target.value
    props.updateNewPostText(text)
  }

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

  return (
    <div className={s.postsBlock}>
      <div>
        <h2>My posts</h2>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div className={s.sendButton}>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;