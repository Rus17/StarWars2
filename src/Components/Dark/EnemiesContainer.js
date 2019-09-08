import {connect} from 'react-redux'
import Enemies from "./Enemies"
import {aliveAC, eliminatedAC, setEnemies} from "./../../redux/enemiesReducer"
import {withAuthRedirect} from '../../hoc/AuthRedirect'
import {compose} from 'redux'

let MapStateToProps = (state) => {
   return {
      enemies: state.enemiesPage.enemies
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      handlerStatusUp: (id) => {dispatch(eliminatedAC(id))},
      handlerStatusDown: (id) => {dispatch(aliveAC(id))},
      handlerSetEnemies: (enemies) => {dispatch(setEnemies(enemies))}
   }
}

export default compose (connect(MapStateToProps, MapDispatchToProps), withAuthRedirect)(Enemies)
