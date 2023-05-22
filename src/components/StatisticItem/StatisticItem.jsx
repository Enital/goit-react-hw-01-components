import React from "react";
import PropTypes from "prop-types";
import css from './statisticItem.module.css'

export const StatisticItem = ({ data }) => {
    let redColor = Math.random() * 200;
    let greenColor = Math.random() * 200;
    let blueColor = Math.random() * 200;
    let rgbColor = `rgb(${redColor} ${greenColor} ${blueColor})`;
    return (
        <li className={css.item} style={{backgroundColor: rgbColor}}>
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
        </li>
    )
}

StatisticItem.prototypes = {
    data: PropTypes.object.isRequired,
}