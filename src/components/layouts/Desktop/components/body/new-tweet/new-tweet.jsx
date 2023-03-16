import React from 'react'
import style from './newtweet.module.css'
import { FiImage, FiCast, FiGitMerge, FiMeh, FiMap, FiMapPin } from "react-icons/fi";

export default function NewTweet() {
  return (
    <div className={style.tweet}>
      <div>
        <img className={style.profilePic} src='https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='logo' />
      </div>
      <div className={style.tweetnew}>
        <div>
          <input className={style.tweet_input} placeholder="What's happening?" />
        </div>
        <div className={style.tweet_actions}>
          <div className={style.tweet_icons}>

            <FiImage />
            <FiCast />
            <FiGitMerge />
            < FiMeh />
            <FiMap />
            <FiMapPin />

          </div>
          <button>Tweet</button>
        </div>
      </div>
    </div>
  )
}
