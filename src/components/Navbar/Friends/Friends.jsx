import React from 'react';
import s from './Friends.module.css'
import Friend from './Friend/Friend'

const Friends = (props) => {
  let friendsElements = props.friends.map(f => <Friend id={f.id} key={f.id} name={f.name} ava={f.ava}/>)

  return (
    <div className={s.friends}>
      <h1>Friends</h1>
      <ul>
        { friendsElements }
      </ul>
    </div>
  )
}

export default Friends;