import React from 'react'
import s from './Users.module.css'

const Users = (props) => {
  
  if(props.users.length === 0) {
    props.setUsers([{
      id: 1,
      ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1uZTBlxjOfVEiZsIt9FSo_bkxgEb6_OslQ&usqp=CAU', followed: false, fullName: 'Violetta', status: 'I am learning the React', location: { country: 'Russia', city: 'Goryachy Klyuch' }
    },
    {
      id: 2,
      ava: 'https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg', followed: true, fullName: 'Sergey', status: 'СергЁЁшка', location: { country: 'Russia', city: 'Tuapsye' }
    },
    {
      id: 3,
      ava: 'https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg', followed: true, fullName: 'Danil', status: 'I am going to Krasnodar this week', location: { country: 'Russia', city: 'Rostov-On-Don' }
    },
    {
      id: 4,
      ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDMBkSpgUtEliwDIKVtqrMYwjkidyAQ1LFnpqKQzeuYGmhG-ZZaHJCcmRBIn201kTy-4&usqp=CAU', followed: true, fullName: 'Dmitry', status: 'I passed my probationary period!', location: { country: 'Ukraine', city: 'Lviv' }
    }, {
      id: 5,
      ava: 'https://media.sciencephoto.com/f0/23/19/34/f0231934-800px-wm.jpg', followed: true, fullName: 'Arut', status: 'Among Us', location: { country: 'Russia', city: 'Goryachy Klyuch' }
    }
  ])
  }

  return <div>
    {
      props.users.map(u => <div className={s.user} key={u.id}>
        <div className={s.location}>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>
        </div>
        
        <span>
          <div>
            <img src={u.ava} />
          </div>
        </span>

        <span>
          <div>{u.fullName}</div>
          <div>{u.status}</div>
        </span>

        <div>
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>
            }
          </div>

      </div>)
    }
  </div>
}

export default Users