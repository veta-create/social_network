import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} ava={d.ava} />)

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

  let addMessage = () => {
    props.addMessage()
  }

  let onMessageChange = (e) => {
    let text = e.target.value
    props.updateNewMessageText(text)
  }

  if(!props.isAuth) { return <Redirect to='/login' />}

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
            value={props.dialogsPage.newMessageText} />
        </div>

        <div>
          <button className={s.sendButton} onClick={addMessage}>Send</button>
        </div>

      </div>
    </div>
  )

}


export default Dialogs;