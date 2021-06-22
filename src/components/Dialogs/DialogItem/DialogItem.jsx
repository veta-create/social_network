import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
    <div className={s.dialog}>
      <img className={s.ava} src={props.ava} />
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;