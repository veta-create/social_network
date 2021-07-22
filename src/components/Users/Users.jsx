import React from 'react'
import userPhoto from '../../assets/images/default-profile.png'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


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
            <NavLink to={'/profile/' + u.id}><img src={u.photos.large != null ? u.photos.large : userPhoto} /></NavLink>
          </div>
        </span>

        <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>

        <div>
          {u.followed
            ? <button className={s.statusFolButton} onClick={() => {
              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                withCredentials: true, headers:
                  { 'API-KEY': '392ee763-ae50-4bf9-a19d-6013041177a5' }
              }).then(res => {
                if (res.data.resultCode == 0) {
                  props.unfollow(u.id)
                }
              }
              )
            }}>Unfollow</button>
            : <button className={s.statusFolButton} onClick={() => {
              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                withCredentials: true, headers:
                  { 'API-KEY': '392ee763-ae50-4bf9-a19d-6013041177a5' }
              }).then(res => {
                if (res.data.resultCode == 0) {
                  console.log(res.data)
                  props.follow(u.id)
                }
              })
            }}>Follow</button>
          }
        </div>

      </div>)
    }
  </div>
}

export default Users