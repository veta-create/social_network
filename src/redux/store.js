import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

let store = {
  _state: {
    messagesPage: {
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
    },

    profilePage: {
      posts: [
        { id: 1, message: 'Hi, it is my third post', likesCount: 12 },
        { id: 2, message: 'Life is awesome!', likesCount: 0 },
        { id: 3, message: 'I want to sleep', likesCount: 25 }
      ],
      newPostText: 'Veta so tired'
    },

    navBar: {
      friends: [
        { id: 1, name: 'Danil', ava: 'https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg' },
        { id: 2, name: 'Sergey', ava: 'https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg' },
        { id: 3, name: 'Arut', ava: 'https://media.sciencephoto.com/f0/23/19/34/f0231934-800px-wm.jpg' }
      ]
    }
  },
  getState() {
    return this._state
  },
  subscriber(observer) {
    this._callSubscriber = observer
  },

  _callSubscriber() { console.log('state has been changed') },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)


    this._callSubscriber(this._state)
  }

}

export default store;