import React, { useState } from "react";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Tweet from "./components/tweet/tweet";
import { insights } from "../../data";
import BottomNav from "./components/bottom-navigation/bottom-nav";
import style from '../Mobile/components/navigation/nav.module.css'

export default function Mobile() {

  const [active, setActive] = useState("tab2")

  const handleTab1 = () => {
    setActive("tab1");
  };
  const handleTab2 = () => {
    setActive("tab2");
  };

  return (
    <div>
      <Header />
      <div className={style.nav}>
      <p onClick={handleTab1} className={active === "tab1" ? "active" : ""}>For you</p>
      <p onClick={handleTab2} className={active === "tab1" ? "active" : ""}>Following</p>
    </div>

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

      {insights.map((insight) => (
        <Tweet
          username={insight.username}
          usertag={insight.userhandle}
          tweetbody={insight.tweetbody}
          profile={insight.profilepic}
          postimg={insight?.postimg}
        />
      ))}
      <BottomNav />
    </div>
  );
}
