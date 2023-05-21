import React from "react";
import PropTypes from "prop-types";

export const StatisticItem = ({ data }) => {
    let redColor = Math.random() * 200;
    let greenColor = Math.random() * 200;
    let blueColor = Math.random() * 200;
    let rgbColor = `rgb(${redColor} ${greenColor} ${blueColor})`;
    return (
        <li className="item" style={{backgroundColor: rgbColor}}>
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}%</span>
        </li>
    )
}

StatisticItem.prototypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}