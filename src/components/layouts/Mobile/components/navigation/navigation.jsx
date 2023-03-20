import React from 'react'
import style from './nav.module.css'

export default function Navigation() {
  return (
    <div className={style.nav}>
      <ul>
      <li >For you</li>
      <li className={style.nav_text}>Following</li>
      <li className={style.nav_text}>NaijaTech</li>
      </ul>
    </div>
  )
}
