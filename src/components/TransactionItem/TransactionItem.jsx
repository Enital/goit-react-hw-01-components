import React from "react";
import PropTypes from "prop-types";
import css from './transactionItem.module.css'

export const TransactionItem = ({ type, amount, currency }) => {
    return (
        <tr className={css.tableRow}>
            <td className={css.tableItem}>{ type }</td>
            <td className={css.tableItem}>{ amount }</td>
            <td className={css.tableItem}>{ currency }</td>
        </tr>
    )
}

TransactionItem.prototypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}