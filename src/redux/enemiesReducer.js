const ALIVE = 'ALIVE'
const ELIMINATED = 'ELIMINATED'
const SET_ENEMIES = 'ENEMIES'

//------------------Начальные значения State------------------
let initialState = {
   enemies: []
}

const enemiesReducer = (state = initialState, action) => {

   switch (action.type) {
      case ALIVE: return {
            ...state,
            enemies: state.enemies.map((enemy) => {
               if(enemy.id === action.darkId){
                  return {
                     ...enemy,
                     status: 'Устранен'
                  }
               }
               return enemy
            })
         }

      case ELIMINATED: return {
            ...state,
            enemies: state.enemies.map((enemy) => {
               if(enemy.id === action.darkId){
                  return {
                     ...enemy,
                     status: 'Жив'
                  }
               }
               return enemy
            })

         }

      case SET_ENEMIES: return {
         ...state,
         enemies: [...state.enemies, ...action.enemies]
      }
      default: return state
  }

}

export default enemiesReducer
export let aliveAC = (darkId) => ({type: ALIVE, darkId})
export const eliminatedAC = (darkId) => ({type: ELIMINATED, darkId})
export const setEnemies = (enemies) => ({type: SET_ENEMIES, enemies})
