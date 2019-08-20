const ALIVE = 'ALIVE'
const ELIMINATED = 'ELIMINATED'
const SET_ENEMIES = 'ENEMIES'

//------------------Начальные значения State------------------
let initialState = {
   enemies: [
   {
      id: 0,
      fullName: 'Дарт Вейдер (Энакин Скайуокер)',
      image: './img/xx.jpg',      
      location: {
         starSystem: 'Процион',
         planet: 'Арда'
      },
      powerLevel: '5',
      status: 'Жив'  
   },
   {
      id: 1,
      fullName: 'Тулак Хорд',
      image: './img/xx.jpg',      
      location: {
         starSystem: 'LV-426',
         planet: 'Кибертрон'
      },
      powerLevel: '3',
      status: 'Устранен'  
   },
  {
      id: 2,
      fullName: 'Нага Садоу',
      image: './img/xx.jpg',      
      location: {
         starSystem: 'Альфа-Центавра',
         planet: 'Барсум'
      },
      powerLevel: '2',
      status: 'Жив'  
   },
  {
      id: 3,
      fullName: 'Каан',
      image: './img/xx.jpg',      
      location: {
         starSystem: 'Сириус',
         planet: 'Пандора'},
      powerLevel: '5',
      status: 'Жив'  
   },
  {
      id: 4,
      fullName: 'Джерек',
      image: './img/xx.jpg',      
      location: {
         starSystem: 'Процион',
         planet: 'Саракш'
      },
      powerLevel: '3',
      status: 'Жив'  
   },
  {
      id: 5,
      fullName: 'Верджер',
      image: './img/xx.jpg',      
      location: {
         starSystem: 'Пояс Ориона',
         planet: 'Алдераан'},
      powerLevel: '2',
      status: 'Устранен'  
   },
  {
      id: 6,
      fullName: 'Шира Элан Колла Бри (Люмия)',
      image: './img/xx.jpg',      
      location: {
         starSystem: 'LV-426',
         planet: 'Кибертрон'
      },
      powerLevel: '1',
      status: 'Жив'  
   },
  {
      id: 7,
      fullName: 'Экзар Кун',
      image: './img/xx.jpg',      
      location: {
         starSystem: 'Альфа-Центавра',
         planet: 'Эндор'
      },
      powerLevel: '3',
      status: 'Жив'  
   },
  {
      id: 8,
      fullName: 'Дарт Бэйн (Дессел)',
      image: './img/xx.jpg',      
      location: {
         starSystem: 'Сириус',
         planet: 'Явин'
      },
      powerLevel: '5',
      status: 'Устранен'  
   },
  {
      id: 9,
      fullName: 'Джейсен Соло (Дарт Кейдус)',
      image: './img/xx.jpg',      
      location: {
         starSystem: 'Процион',
         planet: 'Арда'
      },
      powerLevel: '4',
      status: 'Жив'  
   },
  {
      id: 10,
      fullName: 'Дарт Крайт (АШарад Хетт)',
      image: './img/xx.jpg',      
      location: {
         starSystem: 'Сириус',
         planet: 'Татуин'
      },
      powerLevel: '5',
      status: 'Жив'  
   }  
]
}

const usersReducer = (state = initialState, action) => {
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

export default usersReducer
export const aliveAC = (darkId) => ({type: ALIVE})
export const eliminatedAC = (darkId) => ({type: ELIMINATED, darkId: ''})

export const setEnemies = (enemies) => ({type: SET_ENEMIES, enemies})

