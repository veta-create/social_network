import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDCynhhfFcd2pSXLjYCFc4hEm5b7KU__0T_yMcdr4sZFxoIr9J-rt2EMIifsk_7P0ixs&usqp=CAU" />

       {props.auth.isAuth ? <NavLink to='/profile'><div className={s.login}>{props.auth.login}</div></NavLink> :
        <NavLink to="/login"><div className={s.login}>Log in</div></NavLink>}
      
    </header>
  )
}

export default Header;