import React from 'react';
import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionItem/TransactionItem'
import css from './transactionHistory.module.css'

function TransactionHistory({items}) {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr className={css.tableTitleRow}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return <TransactionItem
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={ item.currency} />
                })}
                
            </tbody>
        </table>
    )
}

export default TransactionHistory;

TransactionHistory.prototype = {
    items: PropTypes.object.isRequired,
}