import React from 'react'
import HeaderDesktop from './header/header-desktop'
import style from './body.module.css'
import Sidebar from '../sidebar/Sidebar'
import NewTweet from './new-tweet/new-tweet'
import Tweet from '../../../Mobile/components/tweet/tweet'

export default function Body() {
  return (
    <div className={style.body}>
      <HeaderDesktop />
      <NewTweet />
      <Tweet 
        profile= 'https://images.unsplash.com/photo-1678931548103-1e3944b899e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        username='Arrey-Etta'
        usertag= '@arreyetta'
        posttime = '9h'
        tweetbody = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos odio eius commodi fugit pariatur placeat soluta amet voluptates. Praesentium eligendi deleniti eius voluptatibus omnis cupiditate ad laborum adipisci dolorum?'
        postimg = 'https://images.unsplash.com/photo-1678933632108-0ea1b61b2082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        />
    </div>
  )
}
