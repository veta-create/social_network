const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
      { id: 1, message: 'Hi, it is my third post', likesCount: 12 },
      { id: 2, message: 'Life is awesome!', likesCount: 0 },
      { id: 3, message: 'I want to sleep', likesCount: 25 }
    ],
    newPostText: 'Veta so tired'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:

      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }

      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state

  }

}

export let addPostActionCreator = () => {
  return {type: 'ADD-POST'}
} 

export let updateNewPostTextActionCreator = (text) => {
  return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}

export default profileReducer