import React from 'react'
import styles from './Members.module.css';
import avatar from './../../img/avatar.png'
import {NavLink} from 'react-router-dom'
import {setFollow, setUnFollow} from './../../api/api'
import {followTC} from './../../redux/membersReducer'


let Members = (props) => {

   let pages = Math.ceil(props.totalUsersCount / props.pageSize)    //Округляет в большую сторону

      let pagesArr = []

      for(let i = 1; i <= pages; i++){pagesArr.push(i)}

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
                           ? <button disabled={props.inTheProcess == u.id} onClick={() => {
                             followTC(u.id) 
//                              props.setinTheProcess(u.id)
//                              setUnFollow(u.id)
//                                 .then(data => {if(data.resultCode == 0) {
//                                    props.unfollow(u.id)
//                                    props.setinTheProcess(null)
//                                 }})
                           }
                                                                                   }>Unfollow</button>
                          
                           : <button disabled={props.inTheProcess == u.id} onClick={() => {
                              props.setinTheProcess(u.id)
                              setFollow(u.id)
                                 .then(data => {if(data.resultCode == 0){
                                    props.follow(u.id)
                                    props.setinTheProcess(null)
                                 }})                             
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

export default Members
