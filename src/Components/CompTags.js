import React from 'react'

class CompTags extends React.Component{
   render(){
      return(         
         /*//   <NavLink to="/search" >{this.props.tag}, </NavLink> */
            <button onClick={
               () => { this.props.handlerTags(this.props.tag)}}>
               {this.props.tag}
            </button>
      )
   }
}

export default CompTags