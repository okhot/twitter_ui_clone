import React from 'react'
import Body from './body/Body'
import Sidebar from './sidebar/Sidebar'
import style from '../components/Desktop.module.css'
import RightSidebar from './right-sidebar/right-sidebar'

export default function Desktop() {
  return (
    <div className={style.desktop}>
      <Sidebar />
        <Body />
        <RightSidebar />
    </div>
  )
}
