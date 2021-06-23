import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage

  let addPost = () => {
    let action = addPostActionCreator()
    props.store.dispatch(action)
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)

    props.store.dispatch(action)
  }

  return (<MyPosts addPost={addPost}
    updateNewPostText={onPostChange}
    posts={state.posts}
    newPostText={state.newPostText} />)
}

export default MyPostsContainer;