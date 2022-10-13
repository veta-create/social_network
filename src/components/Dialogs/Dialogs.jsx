import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import MessageForm from './MessageForm'

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} ava={d.ava} />)

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

  if(!props.isAuth) { return <Redirect to='/login' />}

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        {dialogsElements}

      </div>
      <div className={s.messages}>

        {messagesElements}

        <MessageForm addMessage={props.addMessage}/>
      </div>
    </div>
  )

}


export default Dialogs;