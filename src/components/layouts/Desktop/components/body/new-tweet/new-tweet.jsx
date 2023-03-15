import React from 'react'
import style from './newtweet.module.css'

export default function NewTweet() {
  return (
    <div>
      <div>
        <img className={style.profilePic} src= 'https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='logo' />
       </div>
      <div>
        <div>
          <input className={style.tweet_input} placeholder="What's happening?"/>
        </div>
        <div></div>
      </div>
    </div>
  )
}
