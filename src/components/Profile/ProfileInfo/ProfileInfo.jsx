import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import panorama from '../../../assets/images/panorama.jpg'
import vkLogo from '../../../assets/images/vk-logo.png'
import instLogo from '../../../assets/images/inst-logo.png'
import userPhoto from '../../../assets/images/default-profile.png'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img alt="#" src={panorama} />
      </div>
      <div className={s.descriptionBlock}>

        <div className={s.ava}><img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt='avatar' /></div>

        <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>

        <div><p>{props.profile.fullName}</p></div>
          <div><p>О себе: {props.profile.aboutMe ? props.profile.aboutMe : '...'}</p></div>  
        <div><p>Ищу работу: {props.profile.lookingForAJob ? 'да' : 'нет'}</p></div>

        <div className={s.contacts}>
          <ul>
            <li>
              <div className={s.contact} >
                <img src={vkLogo} alt='vkLogo'/>
                {props.profile.contacts.vk ? props.profile.contacts.vk : 'нет'}
              </div>
            </li>
            <li>
              <div className={s.contact}>
                <img src={instLogo} alt='instagramLogo'/>
                {props.profile.contacts.instagram ? props.profile.contacts.instagram : 'нет'} 
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default ProfileInfo