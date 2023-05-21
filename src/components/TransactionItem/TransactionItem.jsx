import React from "react";
import PropTypes from "prop-types";

export const TransactionItem = ({ type, amount, currency }) => {
    return (
        <tr>
            <td>{ type }</td>
            <td>{ amount }</td>
            <td>{ currency }</td>
        </tr>
    )
}

TransactionItem.prototypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}