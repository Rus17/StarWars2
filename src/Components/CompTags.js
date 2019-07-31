import React from 'react'
import {NavLink} from 'react-router-dom'


class CompTags extends React.Component{
    render(){
      return(
         <NavLink to="/search" >{this.props.tag}, </NavLink>
      )

        // return <button onClick={
        //    () => { this.props.handlerTags(this.props.tag)}}>
        //     {this.props.tag}
         // </button>
    }
}

export default CompTags
