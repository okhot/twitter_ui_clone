import React, { useState } from 'react'
import style from './headerdesk.module.css'

export default function HeaderDesktop() {

  const [active, setActive] = useState('tab1')
  console.log(active)

  return (
    <div className={style.header}>
      <div className={style.pagename}>Home</div>active
      <div className={style.nav}>
        <ul>
          <li className={active === "tab1" ? "active" : ""}>For You</li>
          <li className={active === "tab2" ? "active" : ""}>Following</li>
        </ul>
    </div>
    </div>
  )
}
