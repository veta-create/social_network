import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  debugger
  return (
    <header className={s.header}>

      <img alt="logo"
        src="https://st2.depositphotos.com/3646709/6577/v/600/depositphotos_65778117-stock-illustration-grapefruit.jpg" />

      {props.auth.isAuth ?
        <div className={s.login}>
          {props.auth.login}
          <button onClick={props.auth.logout}>Log Out</button>
        </div>
        : <NavLink to='/login'><div className={s.login}>Log in</div></NavLink>}

    </header>
  )
}

export default Header;