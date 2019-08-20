import React from 'react'

const Enemies = (props) => {
      
   let showEnemies = () => {
      props.enemies.map((enemy)=>{
         return(
            <div key={enemy.id}>
               <div>
                  <img src={enemy.image} alt="Вражеское фото" />
                  <p>{enemy.fullName}</p>
               </div>
            
               <div>
                  <p>Звездная система: {enemy.location.starSystem}</p>
                  <p>Планета: {enemy.location.planet}</p>
                  <p>Уровень силы: {enemy.powerLevel}</p>
                  <p>Статус: 
                     if(enemy.status === 'Жив')<button onClick={() => {
                           props.handlerStatusDown(enemy.id)
                     }}>{enemy.status}</button>
                     else <button onClick={() => {
                           props.handlerStatusUp(enemy.id)
                     }}>{enemy.status}</button>
                     </p>
               </div>     
            </div>
         )
      })
   }
   
   return <div>{showEnemies}</div>
}

export default Enemies