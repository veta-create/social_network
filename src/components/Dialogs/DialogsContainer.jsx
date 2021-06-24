import React, { createRef } from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer'
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().dialogsPage

          let addMessage = () => {
            let action = addMessageActionCreator()
            store.dispatch(action)
          }

          let onMessageChange = (text) => {
            let action = updateNewMessageTextActionCreator(text)

            store.dispatch(action)
          }

          return <Dialogs addMessage={addMessage}
            updateNewMessageText={onMessageChange}
            messages={state.messages}
            dialogs={state.dialogs}
            newMessageText={state.newMessageText}
          />
        }
      }

    </StoreContext.Consumer>
  )
}


export default DialogsContainer;