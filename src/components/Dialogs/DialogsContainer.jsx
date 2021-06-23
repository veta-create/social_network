import React, { createRef } from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage

  let addMessage = () => {
    let action = addMessageActionCreator()
    props.dispatch(action)
  }

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text)

    props.dispatch(action)
  }

  return (<Dialogs addMessage={addMessage}
    updateNewMessageText={onMessageChange}
    store={props.store}
    messages={state.messages}
    dialogs={state.dialogs}
    newMessageText={state.newMessageText}
    />)

}


export default DialogsContainer;