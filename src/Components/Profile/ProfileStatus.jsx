import React from 'react'

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status
   }

   clickHandler = () => {
      this.setState({editMode: true})
   }

   onBlurHandler = () => {
      this.setState({editMode: false})
      this.props.setStatus(this.state.status)
   }


   handlerStatus = (e) => {
      this.setState({status: e.currentTarget.value})
   }

   componentDidUpdate(prevProps, prevState) {
      if(prevProps.status !== this.props.status)
      this.setState({status: this.props.status})
   }

   render(props) {
      return <>
      {!this.state.editMode ?
         <div>
            <span onDoubleClick={this.clickHandler} >Статус: {
               this.props.status || "---------"} </span>
         </div>
      : <input
            onChange={this.handlerStatus}
            autoFocus={true}
            onBlur={this.onBlurHandler}
            value={this.state.status}>
      </input>}
      </>
   }

}
export default ProfileStatus
