import * as axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/default-profile.png'


class Users extends React.Component {

  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
      this.props.setUsers(res.data.items)
      this.props.setUsersTotalCount(res.data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    debugger
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
      this.props.setUsers(res.data.items)
    })
  }

  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }

    return <div>
      <div className={s.pagination}>
        {pages.map(p => {
          return <span className={p === this.props.currentPage ? s.pageSelected : ''}
           onClick={() => this.onPageChanged(p)}>{p}</span>
        })}
      </div>


      {
        this.props.users.map(u => <div className={s.user} key={u.id}>
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
              ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
            }
          </div>

        </div>)
      }
    </div>
  }

}

export default Users