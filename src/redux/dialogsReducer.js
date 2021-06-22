const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  dialogs: [
    { id: 1, name: 'Stanislav', ava: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' },
    { id: 2, name: 'Danil', ava: 'https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg' },
    { id: 3, name: 'Arut', ava: 'https://media.sciencephoto.com/f0/23/19/34/f0231934-800px-wm.jpg' },
    { id: 4, name: 'Sasha', ava: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg' },
    { id: 5, name: 'Sergey', ava: 'https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg'}
  ],
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Надо делать' },
    { id: 3, message: 'Дай интернет' },
    { id: 3, message: 'ооо' },
    { id: 3, message: 'кук' }
  ],
  newMessageText: 'Hi!'
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = { id: 6, message: state.newMessageText }

      state.messages.push(newMessage)
      state.newMessageText = ''
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText
      return state
    default:
      return state

  }
}

export let addMessageActionCreator = () => {
  return {type: 'ADD-MESSAGE'}
}

export let updateNewMessageTextActionCreator = (text) => {
  return {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text}
}

export default dialogsReducer