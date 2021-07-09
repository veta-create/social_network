import React from 'react'
import userPhoto from '../../assets/images/default-profile.png'
import s from './Users.module.css'


let Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return <div>
    <div className={s.pagination}>
      {pages.map(p => {
        return <span className={p === props.currentPage ? s.pageSelected : ''}
          onClick={() => props.onPageChanged(p)}>{p}</span>
      })}
    </div>


    {
      props.users.map(u => <div className={s.user} key={u.id}>
        <div className={s.location}>
          <div>Russia</div>
          <div>Krasnodar</div>
        </div>

        <span>
          <div>
            <img src={u.photos.large != null ? u.photos.large : userPhoto} />
          </div>
        </span>

        <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>

        <div>
          {u.followed
            ? <button className={s.statusFolButton} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
            : <button className={s.statusFolButton} onClick={() => { props.follow(u.id) }}>Follow</button>
          }
        </div>

      </div>)
    }
  </div>
}

export default Users