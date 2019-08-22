import {connect} from 'react-redux'
import Enemies from "./Enemies"
import {aliveAC} from "./../../redux/enemiesReducer"
import {eliminatedAC} from "./../../redux/enemiesReducer"
import {setEnemies} from "./../../redux/enemiesReducer"


let MapStateToProps = (state) => {
   return {
   enemies: state.enemiesPage.enemies
   }
}

let MapDispatchToProps = (dispatch) =>{

   return{
      handlerStatusUp: (id) => {dispatch(eliminatedAC(id))},
      handlerStatusDown: (id) => {dispatch(aliveAC(id))},
      handlerSetEnemies: (enemies) => {dispatch(setEnemies(enemies))}
   }
}




const EmeniesContainer = connect(MapStateToProps, MapDispatchToProps)(Enemies)

export default EmeniesContainer
