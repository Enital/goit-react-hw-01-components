import React from "react";
import PropTypes from "prop-types";

export const TransactionItem = ({ type, amount, currency }) => {
    return (
        <tr className="table-row">
            <td className="table-item">{ type }</td>
            <td className="table-item">{ amount }</td>
            <td className="table-item">{ currency }</td>
        </tr>
    )
}

TransactionItem.prototypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}