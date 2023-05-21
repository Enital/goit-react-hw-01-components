import React from 'react';
import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionItem/TransactionItem'
import './transactionHistory.css'

function TransactionHistory({items}) {
    return (
        <table className="transaction-history">
            <thead>
                <tr className='table-title-row'>
                    <th className='table-title'>Type</th>
                    <th className='table-title'>Amount</th>
                    <th className='table-title'>Currency</th>
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