import React from 'react'
import style from './header.module.css'
import { FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <div className={style.header}>
      <div><img className={style.header_profile_pic} src= 'https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='profile'/></div>
      <div><img className={style.header_logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7yW9A4JU68Jlx8avySPimN-XcjroH1AXpg&usqp=CAU' alt='logo' /></div>
      <div className={style.header_transparent}>
        <p>hello World</p>
      </div>
    </div>
  )
}
