import React from 'react'
import "./Enemies.css"

const Enemies = (props) => {
   if(props.enemies.length === 0)props.handlerSetEnemies([
      {
         id: 0,
         fullName: 'Дарт Вейдер (Энакин Скайуокер)',
         image: './img/enemies/Vader_negtc.jpg',
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
         image: '../img/enemies/Tulak.jpg',
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
         image: './img/enemies/Naga_Sadow.jpg',
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
         image: './img/enemies/Kaan.jpg',
         location: {
            starSystem: 'Сириус',
            planet: 'Пандора'},
         powerLevel: '5',
         status: 'Жив'
      },
      {
         id: 4,
         fullName: 'Джерек',
         image: './img/enemies/JerecScreen.jpg',
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
         image: './img/enemies/Vergere.jpg',
         location: {
            starSystem: 'Пояс Ориона',
            planet: 'Алдераан'},
         powerLevel: '2',
         status: 'Устранен'
      },
      {
         id: 6,
         fullName: 'Шира Элан Колла Бри (Люмия)',
         image: './img/enemies/Lumiya.jpg',
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
         image: './img/enemies/Exar_Kun_Head_Shot.jpg',
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
         image: './img/enemies/Darth.jpg',
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
         image: './img/enemies/JeysonSolo.jpg',
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
         image: './img/enemies/Lord_Krayt.jpg',
         location: {
            starSystem: 'Сириус',
            planet: 'Татуин'
         },
         powerLevel: '5',
         status: 'Жив'
      }
   ])

   let showEnemies = props.enemies.map((enemy)=>{
      return(<div key={enemy.id} >
                <div className="block2">
                   <div>
                   <img src={enemy.image} alt="Вражеское фото" />
                   <br />
                   <b>{enemy.fullName}</b>
                   </div>

                   <div>
                      <p>Звездная система: {enemy.location.starSystem}</p>
                      <p>Планета: {enemy.location.planet}</p>
                      <p>Уровень силы: {enemy.powerLevel}</p>

                      <div>Статус:{(enemy.status === 'Жив') ?
                        <button onClick = {
                           () => { props.handlerStatusDown(enemy.id)}
                              }>{enemy.status}</button> :
                        <button onClick={
                           () => {props.handlerStatusUp(enemy.id)}
                              }>{enemy.status}</button>      
                        }

                     </div>
                  </div>
               </div>
               <hr />
            </div>

      )
   })


      return <div>{showEnemies}</div>
   }

      export default Enemies
