import React from 'react'
import Preloader from './../Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import styles from './Profile.module.css'

let Profile = (props) => {
   if(!props.profile) {return <Preloader />}
   return <div>
      <h5>Профиль пользователя</h5>
      <img src={props.profile.photos.large} alt="Аватарка" className={styles.avatar}/><br />
      <ProfileStatus status={props.status} setStatus={props.setStatus}/>      
      <h3>{props.profile.fullName}</h3>
      <p>О себе: {props.profile.aboutMe}</p>
      <p>Ищу работу: {props.profile.lookingForAJobDescription}</p>
   </div>
}

export default Profile
