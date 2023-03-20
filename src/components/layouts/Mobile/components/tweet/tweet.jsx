import React, { useState } from "react";
import styles from "./tweet.module.css";
import {
  FiHeart,
  FiMessageCircle,
  FiUpload,
  FiRepeat,
  FiMoreHorizontal,
} from "react-icons/fi";
import { useLike } from "../../../../../hooks/useLike";
import { IconContext } from "react-icons";

export default function Tweet({
  profile,
  username,
  usertag,
  posttime,
  tweetbody,
  postimg,
}) {

  const [like, setLike] = useState(false)

  function likeFucn (event) {
    like(event.target.style.fill = 'red')
    setLike(!like)
  }

  return (

    

    <div className={styles.tweet}>
      <div>
        {" "}
        <img
          className={styles.tweet_profilepic}
          src={profile}
          alt="profilepics"
        />
      </div>
      <div>
        <div className={styles.tweet_user}>
          <div className={styles.tweet_userinfo}>
            <p className={styles.tweet_user_name}>{username}</p>
            <span className={styles.tweet_user_tag}>{usertag} </span>
            <span className={styles.tweet_user_tag}>{posttime}</span>
          </div>

          <FiMoreHorizontal />
        </div>
        <div className={styles.tweet_description}>
          <p>{tweetbody}</p>
          <img className={styles.postimage} src={postimg} alt="coke" />
        </div>
        <div className={styles.tweet_icons}>
          <p className={styles.icon}>
            <FiMessageCircle />
            <span className={styles.stats}>23</span>
          </p>
          <p className={styles.icon}>
            <FiRepeat />
            <span className={styles.stats}>4</span>
          </p>
          <p onClick={likeFucn} className={styles.icon}>
            <FiHeart style={{ fill: ''}}/>
            <span className={styles.stats}>98</span>
          </p>
          <p className={styles.icon}>
            <FiUpload />
          </p>
        </div>
      </div>
    </div>
  );
}
