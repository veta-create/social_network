import React from "react";
import s from "./Post.module.css";
import defaultProfile from "../../../../assets/images/default-profile.png";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={defaultProfile} alt="avatar" />
      <div className={s.message}>{props.message}</div>
      <div className={s.like}>
        <span>
          <img
            src="https://i.pinimg.com/474x/cb/2d/de/cb2dde1d70a98aea8966c38f2ede41f6.jpg"
            alt="like"
          />
          {props.likesCount}
        </span>
      </div>
    </div>
  );
};

export default Post;
