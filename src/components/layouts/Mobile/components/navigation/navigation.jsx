import React from 'react'
import style from './nav.module.css'

export default function Navigation() {
  return (
    <div className={style.nav}>
      <p className={style.nav_text_high}>For you</p>
      <p className={style.nav_text}>Following</p>
      <p className={style.nav_text}>NaijaTech</p>
    </div>
  )
}
