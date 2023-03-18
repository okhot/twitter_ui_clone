import React from 'react'
import style from './usercard.module.css'

export default function UserCard({username, usertag, proilepic}) {
    return (
        <div className={style.card}>
            <div>
                <img className={style.profilepic} src={proilepic} alt='logo' />
            </div>
            <div className={style.card_details}>
                <div className={style.card_user_details}>
                    <p>{username}</p>
                    <span>{usertag}</span>
                </div>
                <button>Follow</button>
            </div>
        </div>
    )
}
