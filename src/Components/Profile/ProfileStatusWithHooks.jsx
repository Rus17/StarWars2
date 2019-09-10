import React, {useState, useEffect} from 'react'

const ProfileStatusWithHooks = (props) => {

   // let stateWithSetState = useState(true)
   // let editMode = stateWithSetState[0]
   // let setEditMode = stateWithSetState[1]

   let [editMode, setEditMode] = useState(false)

   const clickHandler = () => {
      setEditMode(true)
   }

   const onBlurHandler = () => {
      setEditMode(false)
      props.setStatus(status)
   }


   let [status, setStatus] = useState(props.status)

   const handlerStatus = (e) => {
      setStatus(e.currentTarget.value)
   }

   useEffect(() => {
      setStatus(props.status)}, [props.status]
   )

   return <>
      {!editMode &&
         <div>
            <span onDoubleClick={clickHandler}>Статус: {
               props.status || "---------"} </span>
         </div>
      }
      {
      editMode && <input
            onChange={handlerStatus}
            onBlur={onBlurHandler}
            autoFocus={true}
            value={status}>
      </input>
      }
   </>
}

export default ProfileStatusWithHooks
