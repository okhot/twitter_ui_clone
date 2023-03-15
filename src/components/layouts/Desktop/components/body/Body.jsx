import React from 'react'
import HeaderDesktop from './header/header-desktop'
import style from './body.module.css'
import Sidebar from '../sidebar/Sidebar'
import NewTweet from './new-tweet/new-tweet'

export default function Body() {
  return (
    <div className={style.body}>
      <HeaderDesktop />
      <NewTweet />
    </div>
  )
}
