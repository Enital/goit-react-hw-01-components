import React from 'react';
// import PropTypes from 'prop-types';
import {TransactionItem} from 'components/TransactionItem/TransactionItem'

function TransactionHistory({items}) {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
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