import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
     posts: state.profilePage.posts,
     newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      let action = addPostActionCreator()
      dispatch(action)
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action)
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;