import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.logo} alt="logo" src={logo} />

      {props.auth.isAuth ? (
        <div className={s.login}>
          {props.auth.login}
          <button className={s.logout} onClick={props.auth.logout}>
            Log Out
          </button>
        </div>
      ) : (
        <NavLink to="/login">
          <div className={s.login}>Log in</div>
        </NavLink>
      )}
    </header>
  );
};

export default Header;
