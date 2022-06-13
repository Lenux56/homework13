import React from 'react'
import Button from '../Button'
import s from './Card.module.sass'

export default function Card({title, color}) {
    console.log(title, color);
    return (
    <div className={s.card} style={{backgroundColor: `${color}`}}>
        <div>
            <p>{title}</p>
            <Button />
    </div>
    </div>
  )
}
