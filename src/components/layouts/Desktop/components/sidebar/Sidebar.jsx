import React from 'react'
import styles from './sidebar.module.css'
import { FaTwitter } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import Link from './link';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>

      <div className={styles.link_sect}>    
            <img src='/icons/logo.svg' alt='' className={styles.twitterlogo} />
        <Link />
        <button>Tweet</button>
      </div>
      <div className={styles.sidebar_user}>
        <img className={styles.sidebar_user_image} src='https://images.unsplash.com/photo-1678933964625-0b57a7ce3c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='profile' />
        <div className={styles.sidebar_user_details}>
          <div className={styles.sidebar_user_name}>
            <p>Array</p>
            <span>@Arrey_E_Mandela</span>
          </div>
          < FiMoreHorizontal />
        </div>
      </div>
    </div>
  )
}
