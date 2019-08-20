import Messages from "./Messages"
import {connect} from 'react-redux'

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

const MessagesContainer = connect (MapStateToProps, MapDispatchToProps) (Messages)

export default MessagesContainer