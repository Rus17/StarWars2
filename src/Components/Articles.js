import React from 'react'
//import Article from "./Article"
import './Articles.css'

class Articles extends React.Component{


    render(){
        return <div
           className="articles"
           style={{backgroundColor: this.props.note3}}
           >
            {this.props.note1}<br />
            Время добавления записи: {this.props.note2}<br />
            <hr />
         </div>
    }
}

export default Articles
