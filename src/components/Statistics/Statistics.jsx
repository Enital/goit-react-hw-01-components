import React from 'react';
import PropTypes from 'prop-types';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import './statistics.css'

function Statistics({ title, stats }) {
    return (
        <section className="statistics">
            {title && (<h2 className="title">{ title }</h2>)}
            <ul className="stat-list">
                {stats.map(el => {
                    return <StatisticItem key={el.id} data={el}/>
                })}
            </ul>
        </section>
        )
} 
    
export default Statistics;

Statistics.prototypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}