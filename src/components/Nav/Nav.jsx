import React from 'react';
import s from './Nav.module.sass';
import logo from './logo.png';
import Button from '../../UI/Button';

export default function Nav() {
  return (
    <nav className={s.main}>
        <div className={s.menu}>
            <a className={s.logo} href="#">
                <img src={logo} alt="Logo" />
            </a>
            <ul className={s.main_list}>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Аренда</a></li>
            </ul>
            <a href="#">
               <Button>Связаться</Button>
            </a>
        </div>
    </nav>
  )
}