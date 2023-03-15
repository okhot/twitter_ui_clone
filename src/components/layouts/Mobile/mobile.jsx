import React from "react";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Tweet from "./components/tweet/tweet";
import { insights } from "../../data";
import BottomNav from "./components/bottom-navigation/bottom-nav";

export default function Mobile() {
  return (
    <div>
      <Header />
      <Navigation />
      {insights.map((insight) => (
        <Tweet 
        username={insight.username}
        usertag={insight.userhandle}
        tweetbody={insight.tweetbody}
        profile={insight.profilepic}
        postimg={insight.postimg}
        />
      ))}
      <BottomNav />
    </div>
  );
}
