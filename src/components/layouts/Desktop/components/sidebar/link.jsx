import React from 'react'
import style from './link.module.css'
import { FaFonticonsFi, FaHome, FaInternetExplorer } from 'react-icons/fa'


export default function Link() {
    return (
        <div>
            <div className={style.link}>
                <div className={style.icon}>
                <img src= '/icons/home.png' alt='' className={style.icon} />
                </div>
                <p>Home</p>
            </div>

            <div className={style.link}>
                <div className={style.icon}>
                    <img src= '/icons/hastag.svg' alt='' className={style.icon} />
                </div>
                <p>Explore</p>
            </div>
            <div className={style.link}>
                <div className={style.icon}>
                <img src= '/icons/notification.svg' alt='' className={style.icon} />
                </div>
                <p>Notification</p>
            </div>
            <div className={style.link}>
                <div className={style.icon}>
                <img src= '/icons/messae.svg' alt='' className={style.icon} />
                </div>
                <p>Message</p>
            </div>
            <div className={style.link}>
                <div className={style.icon1}>
                <img src= '/icons/booknark.svg' alt='' className={style.icon} />
                </div>
                <p>Bookmark</p>
            </div>
            <div className={style.link}>
                <div className={style.icon}>
                <img src= '/icons/list.svg' alt='' className={style.icon} />
                </div>
                <p>List</p>
            </div>
            <div className={style.link}>
                <div className={style.icon}>
                <img src= '/icons/profile.svg' alt='' className={style.icon} />
                </div>
                <p>Profile</p>
            </div>
            <div className={style.link}>
                <div className={style.icon}>
                <img src= '/icons/more.svg' alt='' className={style.icon} />
                </div>
                <p>More</p>
            </div>
        </div>

    )
}
