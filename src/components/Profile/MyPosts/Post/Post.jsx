import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
       <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
       {props.message}
        <div className={s.like}>
          <span><img src="https://i.pinimg.com/474x/cb/2d/de/cb2dde1d70a98aea8966c38f2ede41f6.jpg" />{props.likesCount}</span>
        </div>
     </div>
  )
}

export default Post;