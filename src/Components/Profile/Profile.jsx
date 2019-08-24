import React from 'react'
import Preloader from './../Preloader/Preloader'

let Profile = (props) => {
   if(!props.profile) {return <Preloader />}
   return <div>
   <h5>Профиль пользователя</h5>
   <img src={props.profile.photos.large} alt="Аватарка"/>
   <h3>{props.profile.fullName}</h3>
   <p>О себе: {props.profile.aboutMe}</p>
   <p>Ищу работу: {props.profile.lookingForAJobDescription}</p>
   </div>
}

export default Profile
