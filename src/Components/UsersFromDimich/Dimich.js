import React from 'react'
import styles from './MembersFromDimich.module.css';
import avatar from './../../img/avatar.png'
import {NavLink} from 'react-router-dom'

let Dimich = (props) => {

   let pages = Math.ceil(props.totalUsersCount / props.pageSize)    //Округляет в большую сторону

      let pagesArr = []

      for(let i = 1; i <= pages; i++){
                  pagesArr.push(i)
               }

   return  <div>
         <div>
           {pagesArr.map((p)=>{
                  return <span key={p} className={p === props.currentPage ? styles.selectedPage : ''} onClick={(e) => props.handlerCurrentPage(p)}> {p} </span>
               })
            }

         </div>
        {
            props.members.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'./profile/' + u.id}>
                           <img src={u.photos.small ? u.photos.small : avatar} alt="avatarka" className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Dimich
