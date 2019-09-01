import Messages from "./Messages"
import {connect} from 'react-redux'
import React from 'react'
import {Redirect} from 'react-router-dom'
import {withAuthRedirect} from './../hoc/AuthRedirect'
import {compose} from 'redux'

let MapStateToProps = (state) => {
   return {
      tegs: state.notesPage.allTags,
      filteredNotes: state.notesPage.filteredNotes
   }
}
let MapDispatchToProps = (dispatch) => {
   return {
      dispatch: dispatch
   }
}

export default compose (connect (MapStateToProps, MapDispatchToProps), withAuthRedirect) (Messages)
