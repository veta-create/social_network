import * as axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/default-profile.png'

class Users extends React.Component {

  constructor(props) {
    super(props)
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => this.props.setUsers(res.data.items))
  }


  render() {
    return <div>
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