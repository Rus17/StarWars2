import React from 'react'
import './CompTags.css'
import {handlerTegActionCreator} from "./../redux/state.js"

const CompTags = (props) => {

let addTeg = () => {
   let action = handlerTegActionCreator(props.tag)
   props.dispatch(action)
}

      return(
         <button onClick={addTeg}>
            {props.tag}
         </button>
      )
}

export default CompTags
