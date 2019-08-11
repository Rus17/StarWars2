import React from 'react'
import './Articles.css'

const Articles = (props) => {
   return <div
      className="articles"
      style={{backgroundColor: props.note3}}>
      {props.note1}<br />
      Время добавления записи: {props.note2}<br />
      <hr />
   </div>
}

export default Articles
