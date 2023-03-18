import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import style from './trendCard.module.css'

function TrendCard ({topic, trend, number}) {
    return (
        <div className={style.trend}>
            <div className={style.trend_card}>
                <span>{topic} *</span>
                <span>trending</span>
                <p>{trend}</p>
                <span>{number} Tweets</span>
            </div>
            <di>
                <FiMoreHorizontal />
            </di>
        </div>
    )
}

export default TrendCard