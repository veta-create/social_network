import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Friends.module.css'


const Friend = (props) => {
  return (
    <div>
      <NavLink to={`/${props.id}`}>
        <li className={s.friend} id={props.id}><img src={props.ava} />{props.name}<br /></li>
      </NavLink>
    </div>
  )

}

export default Friend;