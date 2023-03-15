import React from "react";
import styles from "./tweet.module.css";
import { FiHeart, FiMessageCircle, FiUpload, FiRepeat, FiMoreHorizontal } from "react-icons/fi";

export default function Tweet({profile, username, usertag, posttime, tweetbody, postimg}) {
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

          <p className={styles.tweet_user_name}>{username}</p>
          <span className={styles.tweet_user_tag}>{usertag} </span>
          <span className={styles.tweet_user_tag}>{posttime}</span>
          <FiMoreHorizontal />
        </div>
        <div className={styles.tweet_description}>
          <p>{tweetbody}</p>
          <img className={styles.postimage} src={postimg} alt="coke" />
        </div>
        <div className={styles.tweet_icons}>
          <p className={styles.icon}>
            <FiMessageCircle />
          </p>
          <p className={styles.icon}>
            <FiRepeat />
          </p>
          <p className={styles.icon}>
            <FiHeart />
          </p>
          <p className={styles.icon}>
            <FiUpload />
          </p>
        </div>
      </div>
    </div>
  );
}
