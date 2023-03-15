import React from 'react'
import styles from './sidebar.module.css'
import { FaTwitter } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        < FaTwitter />
      </div>
      <div>
      </div>
      <div className={styles.sidebar_user}>
        <img className={styles.sidebar_user_image} src='' alt='profile'/>
        <div className={styles.sidebar_user_details}>
          <span>Array</span>
          <span>@Arrey_E_Mandela</span>
        </div>
        < FiMoreHorizontal />
      </div>
    </div>
  )
}
