import React from "react";
import userPhoto from "../../assets/images/default-profile.png";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pagination}>
        {pages.map((p) => {
          return (
            <span
              className={p === props.currentPage ? s.pageSelected : ""}
              onClick={() => props.onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      </div>

      <div className={s.users}>
        {props.users.map((u) => (
          <div className={s.user} key={u.id}>
            <div className={s.location}>
              <div>Russia</div>
              <div>Krasnodar</div>
            </div>

            <span>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    alt="avatar"
                    src={u.photos.large != null ? u.photos.large : userPhoto}
                  />
                </NavLink>
              </div>
            </span>

            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>

            <div>
              {u.followed ? (
                <button
                  disabled={props.isFollowing.some((id) => id === u.id)}
                  className={s.statusFolButton}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.isFollowing.some((id) => id === u.id)}
                  className={s.statusFolButton}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
