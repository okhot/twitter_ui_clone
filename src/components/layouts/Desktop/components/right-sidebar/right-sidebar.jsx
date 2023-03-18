import React from "react";
import { FiSearch } from "react-icons/fi";
import style from './rightsidebar.module.css'
import Trend from "./trends/trends";
import WhoToFollow from "./who-to-follow/whotofollow";

function RightSidebar() {
    return (
        <div className={style.right_sidebar}>
            <div className={style.search_comp}> 
                <input className={style.search} placeholder="Search Twitter" />
            </div>
            <Trend />
            <WhoToFollow />
        </div>
    );
}

export default RightSidebar