import React from 'react'
import { insights } from '../../../../../data'
import UserCard from './user-card'
import style from './whotofollow.module.css'

export default function WhoToFollow() {
    return (
        <div className={style.card}>
            <p>Who to follow</p>
            {insights.map((user) => (
                <UserCard 
                username={user.username}
                usertag={user.userhandle}
                proilepic={user.profilepic}
                />
            ))}

        </div>
    )
}
