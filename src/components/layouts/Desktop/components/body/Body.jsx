import React, { useState } from 'react'
import HeaderDesktop from './header/header-desktop'
import style from './body.module.css'
import Sidebar from '../sidebar/Sidebar'
import NewTweet from './new-tweet/new-tweet'
import Tweet from '../../../Mobile/components/tweet/tweet'
import { insights } from '../../../../data'

export default function Body() {

  const [active, setActive] = useState("tab1")

  const handleTab1 = () => {
    setActive("tab1");
  };
  const handleTab2 = () => {
    setActive("tab2");
  };

  return (
    <div className={style.body}>

      <div className={style.header}>
        <div className={style.pagename}>Home</div>
        <div className={style.nav}>
          <ul>
            <li onClick={handleTab1} className={active === "tab1" ? "active" : ""}>For You</li>
            <li onClick={handleTab2} className={active === "tab2" ? "active" : ""}>Following</li>
          </ul>
        </div>
      </div>

      <NewTweet />

      {active === "tab1" ? <Tweet
        profile='https://images.unsplash.com/photo-1678931548103-1e3944b899e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        username='Arrey-Etta'
        usertag='@arreyetta'
        posttime='9h'
        tweetbody='Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos odio eius commodi fugit pariatur placeat soluta amet voluptates. Praesentium eligendi deleniti eius voluptatibus omnis cupiditate ad laborum adipisci dolorum?'
        postimg='https://images.unsplash.com/photo-1678933632108-0ea1b61b2082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
      /> : <Tweet
        profile='https://images.unsplash.com/photo-1678931548103-1e3944b899e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        username='Mandela'
        usertag='@arreyetta'
        posttime='9h'
        tweetbody='Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos odio eius commodi fugit pariatur placeat soluta amet voluptates. Praesentium eligendi deleniti eius voluptatibus omnis cupiditate ad laborum adipisci dolorum?'
        postimg='https://images.unsplash.com/photo-1678933632108-0ea1b61b2082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
      />}



      {insights.map((tweet) => (
        <Tweet
          profile={tweet.profilepic}
          username={tweet.username}
          usertag={tweet.userhandle}
          posttime={tweet.time}
          tweetbody={tweet.tweetbody}
          postimg={tweet.postimg}
        />
      ))}

    </div>
  )
}
