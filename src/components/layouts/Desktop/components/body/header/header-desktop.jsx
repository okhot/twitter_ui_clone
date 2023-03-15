import React from 'react'
import style from './headerdesk.module.css'

export default function HeaderDesktop() {
  return (
    <div className={style.header}>
      <div className={style.pagename}>Home</div>
      <div className={style.nav}>
      <p className={style.nav_text_high}>For you</p>
      <p className={style.nav_text}>Following</p>
      <p className={style.nav_text}>NaijaTech</p>
    </div>
    </div>
  )
}
