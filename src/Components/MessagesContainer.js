import React from 'react'
import Messages from "./Messages"
import StoreContext from './../StoreContext'

const MessagesContainer = () => {
   
   return (
      <StoreContext.Consumer> 
      {
         (store) =>{
         let tegs = store.getState().notesPage.allTags
         let listMessages = store.getState().notesPage.filteredNotes
         return <Messages 
               tegs={tegs}
               dispatch={store.dispatch}         
               filteredNotes={listMessages}  
            />}
      }
      </StoreContext.Consumer>
   )      
}

export default MessagesContainer
