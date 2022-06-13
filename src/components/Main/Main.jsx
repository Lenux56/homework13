import React from 'react'
import s from './Main.module.sass'

export default function Main() {
  return (
    <div className={s.main}>
        <div className={s.info}>
            <h2>Что мы предлагаем</h2>
            <div>
                В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда,
                ремонт и настройку всех его узлов, шиномонтажные работы. 
                Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. 
                Все работы выполняем качественно и с душой. 
            </div>
        </div>
        <div className={s.main_img}>

        </div>
    </div>
  )
}