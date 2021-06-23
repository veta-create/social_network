import React, { createRef } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />)

  let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} />)

  let addMessage = () => {
    props.addMessage()
  }

  let onMessageChange = (e) => {
    let text = e.target.value
    props.updateNewMessageText(text)
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
            value={props.newMessageText} />
        </div>

        <div>
          <button className={s.sendButton} onClick={addMessage}>Send</button>
        </div>

      </div>
    </div>
  )

}


export default Dialogs;