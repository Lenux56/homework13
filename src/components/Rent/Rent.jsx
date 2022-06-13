import React from 'react'
import Card from '../../UI/Card'
import s from './Rent.module.sass'

export default function Rent() {
  const cardList = [
    {
        id:1,
        title: 'Годовое ТО', 
        color: '#22356F'
    },
    {
        id:2,
        title: 'Выравнивание колес', 
        color: '#0052C1'
    },
    {
        id:3,
        title: 'Настройка переключателей', 
        color: '#76B58B'
    }];
  console.log(cardList);

  return (
    <div className={s.main}>
        {cardList.map(t => <Card key={t.id} {...t}/>)}
    </div>
  )
}
