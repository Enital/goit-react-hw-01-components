import React from 'react';
import PropTypes from 'prop-types';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import css from '../Statistics/statistics.module.css'

function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{ title }</h2>)}
            <ul className={css.statList}>
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