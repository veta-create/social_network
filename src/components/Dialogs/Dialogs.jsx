import React, { createRef } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer'


const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />)

  let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />)

  let addMessage = () => {
    let action = addMessageActionCreator()
    props.dispatch(action)
  }

  let onMessageChange = (e) => {
    let text = e.target.value
    let action = updateNewMessageTextActionCreator(text)

    props.dispatch(action)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        {dialogsElements}

      </div>
      <div className={s.messages}>

        {messagesElements}

        <div>
          <textarea className={s.textMessage}
            onChange={onMessageChange}
            value={state.newMessageText} />
        </div>

        <div>
          <button className={s.sendButton} onClick={addMessage}>Send</button>
        </div>

      </div>
    </div>
  )

}


export default Dialogs;