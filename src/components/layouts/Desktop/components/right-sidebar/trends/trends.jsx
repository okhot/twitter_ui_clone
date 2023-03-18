import React from "react";
import { trendData } from "../../../../../data";
import TrendCard from "./trend-card";
import style from './trend.module.css'

function Trend() {

    return (
        <div className={style.trending}>
            <p>Trends For you</p>
            {
                trendData.map((trend) => (
                    <TrendCard 
                    topic={trend.topic}
                    trend={trend.trend}
                    number={trend.number}
                    />
                ))
            
            }
        </div>
    )
}

export default Trend
