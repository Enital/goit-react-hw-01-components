import React from "react";
import PropTypes from "prop-types";
import css from './statisticItem.module.css'
import { randomColor } from "Functions/functions";

export const StatisticItem = ({ data }) => {   
    return (
        <li className={css.item} style={{backgroundColor: randomColor()}}>
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
        </li>
    )
}

StatisticItem.prototypes = {
    data: PropTypes.object.isRequired,
}